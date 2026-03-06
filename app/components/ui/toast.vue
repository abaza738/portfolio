<template>
  <div class="toast" :data-type="toast.type">
    <div class="flex items-center gap-2">
      <Icon :name="icon" class="text-lg" />
      <h4>{{ toast.title }}</h4>
    </div>
    <p class="text-xs">{{ toast.message }}</p>
  </div>
</template>

<script setup lang="ts">
const { toast } = defineProps<{
  toast: Toast
}>()

const icon = computed(() => {
  switch (toast.type) {
    case 'error':
      return 'solar:danger-bold'
    case 'info':
      return 'solar:info-circle-linear'
    case 'success':
      return 'solar:check-circle-bold'
    case 'warn':
      return 'solar:danger-triangle-bold'
    default:
      return ''
  }
})
</script>

<style scoped>
@reference '~/assets/css/main.css';

.toast {
  @apply bg-grey-300 dark:bg-grey-600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  border-radius: var(--radius-md);
  overflow: hidden;

  &[data-type='error'] {
    border: 1px solid var(--color-red-600);
  }
  &[data-type='info'] {
    border: 1px solid var(--color-cyan-600);
  }
  &[data-type='success'] {
    border: 1px solid var(--color-green-600);
  }
  &[data-type='warn'] {
    border: 1px solid var(--color-yellow-600);
  }
}
</style>
