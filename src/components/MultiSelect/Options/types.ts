// Interfaces
import { OptionsProps } from './interfaces'
import { Option } from '@components/MultiSelect/interfaces'
import { CheckboxEventParams } from '@components/Checkbox/interfaces'

// Types
export type OnChangeOption = (params: CheckboxEventParams) => void
export type OptionProps = Option & Pick<OptionsProps, 'onChange' | 'isMarkedOption'>
