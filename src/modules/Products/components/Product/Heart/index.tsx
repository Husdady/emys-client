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
    isAddedToFavorites,
    handleMouseEnter,
    handleMouseLeave,
    handleToggleToFavorites
  } = useHeart(props)

  const btn = (
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
          : 'animate__wobble dark:bg-gray-600 dark:text-gray-400 lg:hover:bg-rose-200 lg:hover:text-red-700 dark:lg:hover:bg-pink-300 dark:lg:hover:text-pink-900',
        'animate__animated btn-heart !p-2 rounded-full !absolute left-[initial] right-2 top-2  z-[9999]'
      ])}
    />
  )

  if (isMobileScreen) return <>{btn}</>

  return (
    <Tooltip placement="top" title={titlePopup} trigger={['hover']}>
      {btn}
    </Tooltip>
  )
}
