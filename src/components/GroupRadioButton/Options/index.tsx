// Librarys
import React from 'react'

// Components
import RadioButton from './RadioButton'

// Hooks
import useOptions from './useOptions'

// Types
import type { RadioButtonOptionsProps } from '@components/GroupRadioButton/types'

// Interfaces
import { RadioButtonProps } from '@components/GroupRadioButton/Options/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

const RadioButtonOptions: React.FC<RadioButtonOptionsProps> = (props: RadioButtonOptionsProps) => {
  const { handleOnChange } = useOptions(props)

  return (
    <ul className="px-2 pb-1 flex flex-wrap gap-y-3 gap-x-5 font-poppins">
      {props.options.map((option: RadioButtonProps, i: number) => {
        const existsOptionId = !isUndefined(option.id)
        const checked = [i + 1, option.id, option.value].includes(props.defaultOption)

        return (
          <RadioButton
            key={existsOptionId ? option.id : i}
            {...option}
            name={props.name}
            color={props.color}
            onChange={handleOnChange(option, i)}
            checked={isUndefined(props.defaultOption) ? undefined : checked}
            customContainer={{
              style: option.customContainer?.style,
              className: option.customContainer?.className
            }}
          />
        )
      })}
    </ul>
  )
}

export default React.memo(RadioButtonOptions, (prevProps, nextProps) => {
  return prevProps.options === nextProps.options
})
