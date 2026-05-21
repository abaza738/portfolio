const connections = new Set<string>()

export default defineWebSocketHandler({
  async open(peer) {
    if (connections.size >= 200) {
      peer.websocket.send?.('200+')
      return
    }
    connections.add(peer.id)
    peer.websocket.send?.(connections.size.toString())
  },

  async close(peer) {
    connections.delete(peer.id)
    peer.websocket.send?.(connections.size.toString())
  },

  error(peer, error) {
    console.warn('[ws] error', peer, error)
    connections.delete(peer.id)
    peer.websocket.send?.(connections.size.toString())
  }
})
