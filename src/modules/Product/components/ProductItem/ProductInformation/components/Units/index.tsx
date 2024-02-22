// Components
import Plus from '@assets/icons/plus'
import Minus from '@assets/icons/minus'
import Button from '@components/Button'
import InputText from '@components/InputText'

// Hooks
import useUnits from './useUnits'

// Interfaces
import { UnitsProps } from './interfaces'

export const sharedBtnClassName = 'py-1 scale max-h-[32px] rounded-md disabled:bg-gray-300 dark:bg-gray-600 dark:disabled:bg-gray-400 dark:text-gray-300 dark:disabled:!text-gray-100'

export default function Units(props: UnitsProps) {
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
