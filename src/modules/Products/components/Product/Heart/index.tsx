// Librarys
import Tooltip from '@components/Tooltip'

// Components
import Button from '@components/Button'

// Hooks
import useHeart from './useHeart'

// Interfaces
import { HeartProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Heart(props: HeartProps) {
  const {
    disabled,
    HeartIcon,
    titlePopup,
    isMobileScreen,
    handleMouseEnter,
    handleMouseLeave,
    isAddedToFavorites,
    isRemovingFromFavorites,
    handleToggleToFavorites
  } = useHeart(props)

  const btn = (
    <Button
      title=""
      icon={<HeartIcon />}
      onClick={handleToggleToFavorites}
      disabled={disabled || props.isMakingRequest}
      onMouseEnter={!isMobileScreen ? handleMouseEnter : undefined}
      onMouseLeave={!isMobileScreen ? handleMouseLeave : undefined}
      className={classnames([
        props.isMakingRequest === true ? '!opacity-100' : null,
        'animate__animated btn-heart !p-2 rounded-full !absolute left-[initial] right-2 top-2  z-[9999]',
        !isAddedToFavorites
          ? 'animate__wobble dark:bg-gray-600 dark:text-gray-400'
          : 'bg-rose-200 text-red-700 dark:bg-pink-300 dark:text-pink-900 animate__rubberBand cursor-default',
        !isAddedToFavorites && !isRemovingFromFavorites
          ? 'lg:hover:bg-rose-200 lg:hover:text-red-700 dark:lg:hover:bg-pink-300 dark:lg:hover:text-pink-900'
          : null
      ])}
    />
  )

  if (isMobileScreen) return <div>{btn}</div>

  return (
    <Tooltip placement="top" title={titlePopup} trigger={['hover']}>
      {btn}
    </Tooltip>
  )
}
