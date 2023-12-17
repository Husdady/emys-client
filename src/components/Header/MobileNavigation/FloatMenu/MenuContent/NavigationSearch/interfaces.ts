// Interfaces
import { MutableRefObject } from 'react'
import { InputTextProps } from '@components/InputText/interfaces'
import { NavigationItemProps } from '@components/Header/MobileNavigation/FloatMenu/MenuContent/NavigationItem/interfaces'

export interface NavigationSearchProps {
  seekerTextLabel?: string
  searchPlaceholder?: string
  containerClassName?: string
}

export interface SeekerFormState {
  search: string
  isShowingResults: boolean
}

export interface QuickSearchProps
  extends Omit<
    InputTextProps,
    'icon' | 'results' | 'className' | 'innerClassName' | 'hidePlaceholderOnFocus'
  > {
  isShowingResults: boolean
  isShowingClearIcon: boolean
  navigationSeekerRef: MutableRefObject<HTMLDivElement | null>
  results: Array<Omit<NavigationItemProps, 'navigationItems'>>
  onClear: () => void
  hideResults: () => void
}
