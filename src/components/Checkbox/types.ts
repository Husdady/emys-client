// Interfaces
import { CheckboxProps } from './interfaces'

export type UseCheckboxParams = Pick<
  CheckboxProps,
  | 'id'
  | 'value'
  | 'label'
  | 'checked'
  | 'disabled'
  | 'onCheck'
  | 'onToggle'
  | 'onUnchecked'
  | 'checkColor'
  | 'description'
  | 'inputClassName'
  | 'customLabel'
  | 'containerClassName'
>
