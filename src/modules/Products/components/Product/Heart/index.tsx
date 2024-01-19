// Librarys
import Tooltip from 'antd/lib/tooltip'

// Components
import Button from '@components/Button'

// Hooks
import useHeart from './useHeart'

// Interfaces
import { HeartProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import colors from './colors'

export default function Heart(props: HeartProps) {
  const {
    disabled,
    HeartIcon,
    titlePopup,
    innerStyle,
    isDarkTheme,
    getContainer,
    isHeartRegular,
    isAddedToFavorites,
    handleMouseEnter,
    handleMouseLeave,
    handleToggleToFavorites
  } = useHeart(props)

  return (
    <Tooltip
      placement="top"
      title={titlePopup}
      autoAdjustOverflow
      destroyTooltipOnHide
      overlayInnerStyle={innerStyle}
      getPopupContainer={getContainer}
      getTooltipContainer={getContainer}
      color={isDarkTheme ? colors.darkBg : colors.lightBg}
    >
      <Button
        title=""
        disabled={disabled}
        icon={<HeartIcon />}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggleToFavorites}
        className={classnames([
          isAddedToFavorites
            ? 'bg-rose-200 text-red-700 dark:bg-pink-300 dark:text-pink-900 animate__rubberBand cursor-default'
            : 'animate__wobble dark:bg-gray-600 dark:text-gray-400 hover:bg-rose-200 hover:text-red-700 dark:hover:bg-pink-300 dark:hover:text-pink-900',
          'animate__animated btn-heart !p-2 rounded-full !absolute left-[initial] right-2 top-2  z-[9999]'
        ])}
      />
    </Tooltip>
  )
}
