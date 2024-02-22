// Interfaces
import { ScreenProps } from '@components/Screen/interfaces'

export interface ErrorScreenProps extends Pick<ScreenProps, 'title' | 'description'> {
  boxWrapperClassName?: string
}
