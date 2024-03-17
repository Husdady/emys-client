// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'
import { ScreenProps } from '@components/Screen/interfaces'

export type ErrorScreenProps = OnlyClassNameProp & Pick<ScreenProps, 'title' | 'description'>
