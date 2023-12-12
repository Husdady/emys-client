// Librarys
import React from 'react'

// Interfaces
import { TagProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import classnames from '@utils/classnames'

const Tag = ({ title, className, icon, titlePopup, innerClassName, ...props }: TagProps) => {
  return (
    <article
      {...props}
      title={titlePopup}
      className={classnames([
        className,
        isUndefined(className) || (isString(className) && className.includes('bg-'))
          ? 'bg-gray-200'
          : null,
        'inline-flex items-center justify-center rounded-xl px-3 py-[0.55rem] text-sm text-gray-700 bg-gray-200 font-poppins font-normal whitespace-nowrap'
      ])}
    >
      <div className={classnames([innerClassName, 'flex items-center gap-x-1.5'])}>
        {icon}
        <span>{title}</span>
      </div>
    </article>
  )
}

export default React.memo(Tag)
