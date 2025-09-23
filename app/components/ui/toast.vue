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
.toast {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--spacing) * 1);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  border-radius: var(--radius-md);
  overflow: hidden;

  &[data-type='error'] {
    background-color: hsla(0, 85%, 35%, 0.4);
    border: 1px solid  hsla(0, 85%, 55%, 0.2);
  }
  &[data-type='info'] {
    background-color: hsla(200, 85%, 30%, 0.4);
    border: 1px solid  hsla(200, 85%, 50%, 0.2);
  }
  &[data-type='success'] {
    background-color: hsla(145, 70%, 30%, 0.4);
    border: 1px solid  hsla(145, 70%, 50%, 0.2);
  }
  &[data-type='warn'] {
    background-color: hsla(40, 90%, 30%, 0.4);
    border: 1px solid  hsla(40, 90%, 50%, 0.2);
  }
}
</style>
