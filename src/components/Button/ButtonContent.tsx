// Librarys
import React from 'react'

// Components
import Spin from './Spin'

// Types
import { ButtonContentProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isEmptyString from '@utils/isEmptyString'

const ButtonContent: React.FC<ButtonContentProps> = ({
  icon,
  title,
  loading,
  loadingTitle,
  customSpin,
  titleClassName,
  titleStyle
}: ButtonContentProps) => {
  // Show spin when is fetching to some API
  if (loading === true) {
    return <Spin title={loadingTitle} {...customSpin} />
  }

  return (
    <React.Fragment>
      {icon}

      {!isString(title) && title}

      {isString(title) && !isEmptyString(title) && (
        <span
          style={titleStyle}
          className={classnames([titleClassName, 'text-inherit font-poppins leading-tight'])}
        >
          {title}
        </span>
      )}
    </React.Fragment>
  )
}

export default ButtonContent
