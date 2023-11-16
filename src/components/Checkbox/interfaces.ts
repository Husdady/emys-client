// Librarys
import React from 'react'

// Types
import type { DivType, InputType } from '@config/global-types'

// Interfaces
import { IconProps } from '@components/Icon/interfaces'
import { OnlyStyleProp, OnlyClassNameProp } from '@config/global-interfaces'

export interface CheckboxEventParams extends Pick<CheckboxProps, 'id' | 'label' | 'value'> {
  isActive?: boolean
}

export interface CheckboxPlaceholderProps {
  totalRows?: number
  className?: DivType['className']
  rowClassName?: DivType['className']
  squareClassName?: DivType['className']
}

export interface CheckboxContentProps
  extends Pick<
    CheckboxProps,
    | 'value'
    | 'label'
    | 'checked'
    | 'disabled'
    | 'description'
    | 'backgroundColor'
    | 'innerClassName'
    | 'inputClassName'
  > {
  checkboxId: string
  iconProps: IconProps
  labelClassName: string
  labelStyle?: React.CSSProperties
  isExistingDescription: boolean
  onChange: () => void
}

export interface CheckboxProps {
  id?: string
  checked?: boolean
  disabled?: boolean
  description?: string
  label?: React.ReactNode
  value?: InputType['value']
  innerClassName?: DivType['className']
  inputClassName?: InputType['className']
  customLabel?: OnlyStyleProp & OnlyClassNameProp
  checkColor?: React.CSSProperties['color']
  backgroundColor?: React.CSSProperties['backgroundColor']
  containerElement?: 'li' | 'div'
  containerClassName?: string
  onCheck?: (params: CheckboxEventParams) => void
  onUnchecked?: (params: CheckboxEventParams) => void
  onToggle?: (params: CheckboxEventParams) => void
}

export interface UseCheckboxSettingsParams
  extends Pick<
    CheckboxProps,
    | 'id'
    | 'onCheck'
    | 'onUnchecked'
    | 'onToggle'
    | 'checkColor'
    | 'disabled'
    | 'description'
    | 'inputClassName'
    | 'containerClassName'
    | 'customLabel'
  > {
  onChange: () => void
}
