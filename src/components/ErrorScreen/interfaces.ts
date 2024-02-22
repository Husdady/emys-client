// Interfaces
import { ScreenProps } from '@components/Screen/interfaces'
import { OnlyClassNameProp } from '@config/global-interfaces'

export type ErrorScreenProps = OnlyClassNameProp & Pick<ScreenProps, 'title' | 'description'>