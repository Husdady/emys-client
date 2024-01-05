// Librarys
import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'

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
        'page-screen flex flex-col items-center justify-center container mx-auto px-4 lg:px-0 dark:bg-gray-900 overflow-hidden min-h-[100vh]'
      ])}
    >
      {!isUndefined(image.src) && (
        <Image
          {...image}
          priority
          alt={image.alt as string}
          src={image.src as string | StaticImageData}
          className={classnames([image.className, 'object-cover mx-auto'])}
        />
      )}

      <h3
        {...customTitle}
        className={classnames([
          customTitle.className,
          'mb-2 font-poppins font-bold text-3xl text-center main-title max-w-[550px] leading-tight px-5'
        ])}
      >
        {title}
      </h3>

      <span
        {...customDescription}
        className={classnames([
          customDescription.className,
          'screen-description font-poppins font-bold text-base text-gray-700 sm-container text-center block mt-2 mb-6 dark:text-gray-300 max-w-[650px] px-2'
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
            'text-white font-poppins ring-2 ring-transparent hover:bg-transparent !py-[0.9rem] rounded-full dark:hover:bg-transparent hover:font-semibold dark:hover:font-normal !gap-x-1.5'
          ])}
        />
      )}
    </div>
  )
}
