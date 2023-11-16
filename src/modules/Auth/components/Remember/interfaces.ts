// Interfaces
import { CheckboxEventParams } from '@components/Checkbox/interfaces'

export interface LoginRememberProps {
  remember: boolean
  onRemember: (params: CheckboxEventParams) => void
}
