<template>
  <button
    :class="[
      'px-4 py-1 rounded-lg',
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

const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  size: 'md',
  variant: 'primary',
  disabled: false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs'
    case 'lg':
      return 'text-ms'
    default:
      return 'text-sm'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-blue-700 hover:bg-blue-800 text-white'
    case 'secondary':
      return 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    case 'outline':
      return 'bg-transparent border border-grey-200 hover:border-gray-300'
    default:
      return 'bg-blue-700 hover:bg-blue-800 text-white'
  }
})
</script>