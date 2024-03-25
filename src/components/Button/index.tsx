// Librarys
import React from 'react'

// Components
import ButtonContent from './ButtonContent'

// Hooks
import useButton from './useButton'

// Interfaces
import { ButtonProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { ButtonProps as Props } from './constants'

const Button: React.FC<ButtonProps> = ({
  type = Props.DEFAULT_TYPE,
  disabled = Props.DEFAULT_DISABLED,
  loadingTitle = Props.DEFAULT_LOADING_TITLE,
  id,
  title,
  customTitle = {},
  titlePopup,
  icon,
  style,
  className,
  onClick,
  onDoubleClick,
  isShowingSpin,
  customSpin = {},
  ...props
}: ButtonProps) => {
  const { handleDoubleClick } = useButton({
    onClick: onClick,
    onDoubleClick: onDoubleClick
  })

  return (
    <button
      {...props}
      id={id}
      type={type}
      style={style}
      disabled={disabled || isShowingSpin === true}
      onClick={isUndefined(onDoubleClick) ? onClick : handleDoubleClick}
      title={titlePopup ?? (isString(title) && !isEmptyString(title) ? title : undefined)}
      className={classnames([
        className,
        'btn overflow-hidden relative outline-none flex flex-wrap items-center justify-center gap-x-2 gap-y-1'
      ])}
    >
      <ButtonContent
        icon={icon}
        title={title}
        loading={isShowingSpin}
        customSpin={customSpin}
        loadingTitle={loadingTitle}
        titleStyle={customTitle.style}
        titleClassName={customTitle.className}
      />
    </button>
  )
}

export default React.memo(Button, (prevProps, nextProps) => {
  return (
    prevProps.type === nextProps.type &&
    prevProps.icon === nextProps.icon &&
    prevProps.title === nextProps.title &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.loadingTitle === nextProps.loadingTitle &&
    prevProps.isShowingSpin === nextProps.isShowingSpin &&
    prevProps.onClick?.toString() === nextProps.onClick?.toString() &&
    prevProps.onMouseEnter?.toString() === nextProps.onMouseEnter?.toString() &&
    prevProps.onMouseLeave?.toString() === nextProps.onMouseLeave?.toString() &&
    prevProps.onDoubleClick?.toString() === nextProps.onDoubleClick?.toString()
  )
})
