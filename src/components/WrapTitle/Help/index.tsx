// Librarys
import Tooltip from 'antd/lib/tooltip'
import { useMemo, useCallback, CSSProperties } from 'react'

// Components
import HelpIcon from '@assets/icons/help'

// Hooks
import useTheme from '@hooks/useTheme'

// Interfaces
import { HelpProps } from './interfaces'

// Constants
import colors from './colors'
import useHelp from './useHelp'

export default function Help({ title }: HelpProps) {
  const { innerStyle, getContainer, isDarkTheme } = useHelp()

  return (
    <Tooltip
      title={title}
      placement="left"
      trigger={['click']}
      autoAdjustOverflow
      destroyTooltipOnHide
      overlayInnerStyle={innerStyle}
      getPopupContainer={getContainer}
      getTooltipContainer={getContainer}
      color={isDarkTheme ? colors.darkBg : colors.lightBg}
    >
      <div className="icon select-none hover-transition p-2 rounded-full hover:bg-gray-500 hover:bg-opacity-20 dark:hover:bg-opacity-50 hover:cursor-pointer">
        <HelpIcon
          size="sm"
          useHoverEffect
          className="help rounded-full pointer-events-none bg-gray-600 text-gray-200 dark:bg-main-200 dark:text-gray-800"
        />
      </div>
    </Tooltip>
  )
}
