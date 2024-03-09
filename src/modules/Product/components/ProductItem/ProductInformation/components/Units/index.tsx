// Librarys
import { memo } from 'react'

// Components
import Plus from '@components/Icons/Plus'
import Minus from '@components/Icons/Minus'
import Button from '@components/Button'
import InputText from '@components/InputText'

// Hooks
import useUnits from './useUnits'

// Interfaces
import { UnitsProps } from './interfaces'

export const sharedBtnClassName =
  'py-1 scale max-h-[32px] rounded-md disabled:bg-gray-300 dark:bg-gray-600 dark:disabled:bg-gray-400 dark:text-gray-300 dark:disabled:!text-gray-100'

function Units(props: UnitsProps) {
  const {
    handleBlur,
    increaseUnits,
    decreaseUnits,
    handleChangeUnit,
    isDisabledIncreaseButton,
    isDisabledDecreaseButton
  } = useUnits(props)

  return (
    <div className="pick-units flex items-center gap-x-1.5">
      <Button
        title=""
        icon={<Minus />}
        onClick={decreaseUnits}
        className={sharedBtnClassName}
        disabled={isDisabledDecreaseButton}
        titlePopup={isDisabledDecreaseButton ? '' : 'Quitar unidad'}
      />

      <InputText
        type="number"
        placeholder=""
        value={props.units}
        onBlur={handleBlur}
        disabled={!props.isInStock}
        onChange={handleChangeUnit}
      />

      <Button
        title=""
        icon={<Plus />}
        onClick={increaseUnits}
        className={sharedBtnClassName}
        disabled={isDisabledIncreaseButton}
        titlePopup={isDisabledIncreaseButton ? '' : 'Agregar unidad'}
      />
    </div>
  )
}

export default memo(Units)
