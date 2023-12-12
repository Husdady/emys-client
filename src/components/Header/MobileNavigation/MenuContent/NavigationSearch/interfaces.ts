// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'
import { NavigationItemProps } from '@components/Header/MobileNavigation/MenuContent/NavigationItem/interfaces'

export interface SeekerFormState {
  search: string
  isShowingResults: boolean
}

export interface QuickSearchProps
  extends Omit<
    InputTextProps,
    | 'icon'
    | 'results'
    | 'placeholder'
    | 'className'
    | 'innerClassName'
    | 'containerClassName'
    | 'hidePlaceholderOnFocus'
  > {
  isShowingResults: boolean
  isShowingClearIcon: boolean
  results: Array<Omit<NavigationItemProps, 'navigationItems'>>
  onClear: () => void
  hideResults: () => void
}