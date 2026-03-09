/**
 * WebSocket handler that tracks and broadcasts the number of connected clients.
 *
 * - `peer.peers.size` in `open` includes the connecting peer (added before the hook).
 *   `peer.peers.size` in `close` and `error` excludes the departing peer (removed before
 *   the hook). No offset arithmetic is needed.
 *
 * - `peer.publish()` is a no-op on the Cloudflare adapter. Broadcasting is done
 *   by iterating `peer.peers` directly and sending to each peer individually.
 *
 * - Every hook broadcasts to all remaining peers so every connected client always
 *   has an up-to-date count, not just the client that triggered the event.
 *
 * Limitation:
 *   `peer.peers` is scoped to a single Cloudflare Worker isolate. In practice this
 *   is acceptable because CF routes WebSocket connections with edge affinity, meaning
 *   most or all connections for a session land on the same isolate. A globally accurate
 *   count across all edge nodes would require a Durable Object.
 */
export default defineWebSocketHandler({
  open(peer) {
    const count = peer.peers.size
    for (const p of peer.peers) {
      p.send(count.toString())
    }
  },

  close(peer) {
    const count = peer.peers.size
    for (const p of peer.peers) {
      p.send(count.toString())
    }
  },

  error(peer, error) {
    console.warn('[ws] error', peer, error)
    const count = peer.peers.size
    for (const p of peer.peers) {
      p.send(count.toString())
    }
  }
})
