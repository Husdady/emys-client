// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'
import { InputTextProps } from '@components/InputText/interfaces'

export interface SearchFallbackProps extends OnlyClassNameProp {
  textLabelClassName?: string
}

export interface SearchFilterProps
  extends Omit<
    InputTextProps,
    | 'icon'
    | 'className'
    | 'innerClassName'
    | 'containerClassName'
    | 'placeholder'
    | 'hidePlaceholderOnFocus'
  > {
  placeholder: string
  containerClassName?: string
  textLabelClassName?: string
}
