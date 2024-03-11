// Interfaces
import { SpinProps, ButtonProps } from './interfaces'

export type UseSpinParams = Omit<SpinProps, 'style' | 'title'>

export type UseButtonParams = Pick<ButtonProps, 'onClick' | 'onDoubleClick'>
