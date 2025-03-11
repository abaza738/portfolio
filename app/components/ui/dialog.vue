<template>
  <Transition appear>
    <dialog ref="dialogRef" :class="$attrs.class">
      <div class="title">
        <slot name="header">
          <h2 v-if="title">{{ title }}</h2>
        </slot>

        <div class="close">
          <Icon name="heroicons:x-mark-16-solid" class="cursor-pointer text-xl" @click="closeDialog" />
        </div>
      </div>

      <div class="content">
        <slot></slot>
      </div>

      <slot name="footer" />
    </dialog>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  openOnMount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  openOnMount: false
})

const emit = defineEmits<{
  (e: 'open'): void
  (e: 'close'): void
}>()

const dialogRef = ref<HTMLDialogElement | null>(null)

const openDialog = () => {
  dialogRef.value?.showModal()
  emit('open')
}

const closeDialog = () => {
  dialogRef.value?.close()
  emit('close')
}

onMounted(() => {
  if (props.openOnMount) {
    openDialog()
  }
})

defineExpose({
  open: openDialog,
  close: closeDialog
})
</script>

<style scoped lang="scss">
dialog {
  min-width: 300px;
  max-height: 90%;
  max-width: 90%;
  background: color-mix(in srgb, var(--bg-dark) 40%, transparent 60%);
  backdrop-filter: blur(6px);
  color: white;
  border-radius: theme('borderRadius.lg');
  overflow: hidden;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.85);
  }

  .title {
    display: flex;
    align-items: center;
    padding: theme('spacing.4');
    border-bottom: 1px solid hsla(0deg, 100%, 100%, 0.1);
    font-size: theme('fontSize.xl');
    font-weight: bold;

    .close {
      display: flex;
      margin-inline-start: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: theme('spacing.2');
    padding: theme('spacing.4');
  }
}
</style>