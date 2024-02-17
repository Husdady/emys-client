// Librarys
import React from 'react'

// Components
import InputIcon from './InputIcon'
import InputEye from '@components/InputEye'
import InputError from '@components/InputError'
import InputLabel from '@components/InputLabel'
import CircleXmarkSolid from '@assets/icons/circle-xmark-solid'

// Hooks
import useInputText from './useInputText'

// Interfaces
import { InputTextProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import { InputProps as Props } from './constants'

const InputText: React.FC<InputTextProps> = ({
  type = Props.DEFAULT_TYPE,
  isShowingPassword = Props.DEFAULT_SHOW_PASSWORD,
  isShowingClearIcon = Props.DEFAULT_SHOW_CLEAR_ICON,
  hidePlaceholderOnFocus = Props.DEFAULT_HIDE_PLACEHOLDER_ON_FOCUS,
  icon,
  label = {},
  textLabel,
  error,
  customError = {},
  containerStyle,
  style,
  value,
  readOnly,
  preventAutoComplete,
  ...props
}: InputTextProps) => {
  const {
    refInner,
    refContainer,
    placeholder,
    handleOnBlur,
    handleOnFocus,
    handleKeyDown,
    handleOnClick,
    createRefInput,
    changeInputType,
    clearIconSettings
  } = useInputText({
    type: type,
    isShowingPassword: isShowingPassword,
    preventAutoComplete: preventAutoComplete,
    hidePlaceholderOnFocus: hidePlaceholderOnFocus,
    ...props
  })

  return (
    <div
      tabIndex={-1}
      ref={refContainer}
      style={containerStyle}
      className={classnames([
        'form-control',
        props.containerClassName,
        props.disabled === true ? 'disabled' : null
      ])}
    >
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      <div
        ref={refInner}
        onClick={handleOnClick}
        className={classnames([
          props.innerClassName,
          props.hasError === true ? 'shadow-field-error' : null,
          'overflow-hidden inner z-50 relative cursor-text flex items-center gap-x-3 w-full py-3 px-4 rounded border leading-tight bg-white dark:bg-gray-900 border-gray-400/50 dark:border-gray-400/70 outline outline-1 outline-gray-400/50 shadow-sm dark:outline-gray-400/70'
        ])}
      >
        <InputIcon icon={icon} type={type} />

        <input
          {...props.customInput}
          ref={createRefInput}
          type={type}
          style={style}
          value={value}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onKeyDown={handleKeyDown}
          disabled={props.disabled}
          placeholder={placeholder}
          readOnly={isUndefined(readOnly) && preventAutoComplete === true ? true : readOnly}
          onChange={
            isUndefined(props.customInput?.onChange) ? props.onChange : props.customInput?.onChange
          }
          className={classnames([
            props.className,
            props.hideArrows === true ? 'hide-arrows' : null,
            'input appearance-none w-full bg-transparent font-poppins placeholder:font-normal focus:outline-none text-gray-700 placeholder-gray-400 font-semibold dark:font-normal dark:text-gray-200 dark:placeholder-gray-400',
            hidePlaceholderOnFocus
              ? 'focus:placeholder-transparent dark:focus:placeholder-transparent'
              : null
          ])}
        />

        {isShowingClearIcon && <CircleXmarkSolid {...clearIconSettings} />}

        <InputEye
          show={isShowingPassword}
          onShow={() => changeInputType('text')}
          onHide={() => changeInputType('password')}
        />
      </div>

      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(InputText, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.onBlur === nextProps.onBlur &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.hasError === nextProps.hasError &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.customInput === nextProps.customInput &&
    prevProps.onPressEnter === nextProps.onPressEnter &&
    prevProps.isShowingClearIcon === nextProps.isShowingClearIcon &&
    prevProps.containerClassName === nextProps.containerClassName
  )
})
