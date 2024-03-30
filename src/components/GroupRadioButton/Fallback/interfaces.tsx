// Interfaces
export interface FallbackItemConfig {
  id?: string
  className: string
  containerClassName?: string
}

export interface FallbackProps {
  classLabel?: string
  showLabel?: boolean
  config?: FallbackItemConfig[]
}
