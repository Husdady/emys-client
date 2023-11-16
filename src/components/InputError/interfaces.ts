// Librarys
import React from 'react'

export interface InputErrorProps {
  value?: string
  iconColor?: React.CSSProperties['color']
  textStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  textClassName?: React.HTMLAttributes<HTMLSpanElement>['className']
  iconClassName?: React.HTMLAttributes<HTMLDivElement>['className']
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className']
}
