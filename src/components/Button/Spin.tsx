// Interfaces
import { SpinProps } from '@components/Button/interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { SpinnerProps as Props } from '@components/Button/constants'

export default function Spin({
  size = Props.DEFAULT_SIZE,
  align = Props.DEFAULT_ALIGN,
  center = Props.DEFAULT_CENTER,
  title = Props.DEFAULT_TITLE,
  customTitle = {},
  style,
  className,
  customSvg = {}
}: SpinProps) {
  return (
    <div
      role="status"
      style={style}
      className={classnames([
        className,
        center ? 'justify-center' : null,
        align === 'vertical' ? 'flex-col' : null,
        'spinner flex items-center gap-x-2.5'
      ])}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classnames(['animate-spin', size, customSvg?.className])}
        style={customSvg?.style}
      >
        <circle cx="4" cy="4" r="10" stroke="currentColor" className="opacity-25"></circle>
        <path
          fill="currentColor"
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      {isString(title) && !isEmptyString(title) && (
        <span
          style={customTitle?.style}
          className={classnames([
            customTitle?.className,
            'text-inherit font-poppins leading-[1.3075]'
          ])}
        >
          {title}
        </span>
      )}
    </div>
  )
}
