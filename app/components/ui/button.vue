<template>
  <button
    :class="[
      'cursor-pointer px-4 py-1 rounded-lg',
      sizeClasses,
      variantClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
}

const {
  label = 'Button',
  size = 'md',
  variant = 'primary',
  disabled = false
} = defineProps<Props>()

const sizeClasses = computed(() => {
  switch (size) {
    case 'sm':
      return 'text-xs'
    case 'lg':
      return 'text-ms'
    default:
      return 'text-sm'
  }
})

const variantClasses = computed(() => {
  switch (variant) {
    case 'primary':
      return 'bg-primary hover:bg-primary/80 text-white'
    case 'secondary':
      return 'bg-grey-200 hover:bg-grey-300 text-grey-800'
    case 'outline':
      return 'bg-transparent border border-grey-600 dark:border-grey-400 hover:bg-grey-200 dark:hover:bg-grey-800'
    default:
      return 'bg-primary hover:bg-primary/80 text-white'
  }
})
</script>
