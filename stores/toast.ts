export const useToast = defineStore('toast', () => {
  const toasts = reactive<Record<string, Toast>>({})

  const add = (toast: Partial<Omit<Toast, 'id'>>) => {
    const newToast: Toast = {
      id: useId() ?? new Date().getTime().toString(),
      duration: toast.duration ?? 3e3,
      type: toast.type ?? 'info',
      message: toast.message ?? '',
      title: toast.title ?? ''
    }

    toasts[newToast.id] = newToast

    useTimeoutFn(() => {
      if (newToast.id) delete toasts[newToast.id]
    }, newToast.duration)
  }

  return {
    toasts,
    add
  }
})
