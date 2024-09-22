export type ToastType = 'info' | 'success' | 'warn' | 'error'

export type Toast = {
  id: string
  title: string
  message: string
  duration: number
  type: ToastType
}
