// Librarys
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Hooks
import useScreen from './useScreen'

// Interfaces
import { ScreenProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import * as constants from './constants'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

export default function Screen({
  showButton = constants.DEFAULT_SHOW_BUTTON,
  style,
  className,
  image = {},
  button = {},
  title,
  customTitle = {},
  description,
  customDescription = {}
}: ScreenProps) {
  const { backToMainPage } = useScreen()

  return (
    <div
      style={style}
      className={classnames([
        className,
        'page-screen flex flex-col items-center justify-center container mx-auto px-4 lg:px-0 dark:bg-gray-900 overflow-hidden'
      ])}
    >
      {!isUndefined(image.src) && (
        <Image
          {...image}
          priority
          src={image.src as string}
          alt={image.alt as string}
          className={classnames([image.className, 'object-cover mx-auto'])}
        />
      )}

      <h3
        {...customTitle}
        className={classnames([
          customTitle.className,
          'font-poppins font-bold text-3xl text-center main-title'
        ])}
      >
        {title}
      </h3>

      <span
        {...customDescription}
        className={classnames([
          customDescription.className,
          'screen-description font-poppins font-bold text-[0.93rem] text-gray-700 sm-container text-center md:w-7/12 block mt-2 mb-6 dark:text-gray-300'
        ])}
      >
        {description}
      </span>

      {showButton && (
        <Button
          {...button}
          title={button.title}
          onClick={backToMainPage}
          customTitle={constants.DEFAULT_CUSTOM_TITLE}
          className={classnames([
            button.className,
            'text-white font-poppins ring-2 ring-transparent hover:bg-transparent !py-[0.9rem] rounded-full dark:hover:bg-transparent'
          ])}
        />
      )}
    </div>
  )
}
