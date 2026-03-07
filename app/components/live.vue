<template>
  <div
    :data-state="state"
    :title="getTitle(state)"
    :class="{ 'cursor-pointer': state === 'failed' }"
    class="root flex items-center px-2 rounded-full gap-1"
    @click="
      () => {
        if (state === 'failed') open()
      }
    "
  >
    <div class="indicator h-2 w-2 rounded-full" />
    <span>{{ data ?? 0 }}</span>
  </div>
</template>

<script setup lang="ts">
type State = 'idle' | 'connected' | 'disconnected' | 'failed'
const state = useState<State>('ws-status', () => 'idle')

const { data, open } = useWebSocket<number>(
  `ws${import.meta.dev ? '' : 's'}://${location.host}/room`,
  {
    autoReconnect: {
      delay: 3,
      retries: 3,
      onFailed: () => (state.value = 'failed')
    },
    onConnected: () => {
      console.log('[ws] connected')
      state.value = 'connected'
    },
    onDisconnected: (_, event) => {
      console.log('[ws] disconnected:', event)
      state.value = 'disconnected'
    }
  }
)

function getTitle(state: State) {
  switch (state) {
    case 'idle':
      return 'Idle'
    case 'connected':
      return `${data.value} people are on this website now!`
    case 'disconnected':
      return 'Disconnected, reconnecting shortly...'
    case 'failed':
      return 'Failed to connect. Click to retry.'
  }
}
</script>

<style scoped>
@reference '~/assets/css/main.css';

.root {
  &[data-state='idle'] {
    --state-color: color-mix(in oklch, var(--color-grey-800) 25%, transparent);
    @variant dark {
      --state-color: color-mix(
        in oklch,
        var(--color-grey-200) 50%,
        transparent
      );
    }
  }
  &[data-state='connected'] {
    --state-color: var(--color-green-600);
    @variant dark {
      --state-color: var(--color-green-400);
    }
  }
  &[data-state='disconnected'] {
    --state-color: var(--color-amber-600);
    @variant dark {
      --state-color: var(--color-amber-400);
    }
  }
  &[data-state='failed'] {
    --state-color: var(--color-red-600);
  }

  border: 1px solid var(--state-color);
  line-height: 1.25;

  .indicator {
    background-color: var(--state-color);
  }
}
</style>
