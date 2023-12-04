// Interfaces
import { OptionsProps } from './interfaces'
import { Option } from '@components/Select/interfaces'

// Types
export type OnChangeOption = (option: Option) => void
export type OptionProps = Option & Pick<OptionsProps, 'onChange'>
