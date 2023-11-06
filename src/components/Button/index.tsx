// Librarys
import React from 'react'

// Components
import ButtonContent from './ButtonContent'

// Hooks
import useButton from './useButton'

// Interfaces
import { ButtonProps } from './interfaces'

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
  depsForDoubleClick,
  isShowingSpin,
  customSpin = {},
  ...props
}: ButtonProps) => {
  const { buttonClassName, handleDoubleClick } = useButton({
    className: className,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    depsForDoubleClick: depsForDoubleClick
  })

  return (
    <button
      {...props}
      id={id}
      type={type}
      style={style}
      title={titlePopup}
      className={buttonClassName}
      disabled={disabled || isShowingSpin === true}
      onClick={typeof onDoubleClick === 'undefined' ? onClick : handleDoubleClick}
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
    prevProps.onClick === nextProps.onClick &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.loadingTitle === nextProps.loadingTitle &&
    prevProps.isShowingSpin === nextProps.isShowingSpin
  )
})
