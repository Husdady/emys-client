// Interfaces
import { ScreenProps } from '@components/Screen/interfaces'
import { OnlyClassNameProp } from '@config/globalInterfaces'

export type ErrorScreenProps = OnlyClassNameProp & Pick<ScreenProps, 'title' | 'description'>
