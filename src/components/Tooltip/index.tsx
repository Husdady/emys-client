// Librarys
import AntTooltip from 'antd/lib/tooltip'

// Hooks
import useTooltip from './useTooltip'

// Types
import type { TooltipProps } from './types'

// Constants
import colors from './colors'

export default function Tooltip({
  children,
  placement = 'left',
  trigger = ['click'],
  ...props
}: TooltipProps) {
  const { innerStyle, getContainer, isDarkTheme } = useTooltip()

  return (
    <AntTooltip
      {...props}
      autoAdjustOverflow
      destroyTooltipOnHide
      trigger={trigger}
      placement={placement}
      overlayInnerStyle={innerStyle}
      getPopupContainer={getContainer}
      getTooltipContainer={getContainer}
      color={isDarkTheme ? colors.darkBg : colors.lightBg}
    >
      {children}
    </AntTooltip>
  )
}
