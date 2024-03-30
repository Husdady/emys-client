/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Hooks
import useModal from '../config/store/states/modal/useModal'
import useMounted from './useMounted'

interface Params {
  disabled: boolean
}

/**
 * Hook that implements the logic of disabling the 'accept' button of a modal that contains filters
 * @param {Params} params Receive a flag for disable the submit button
 */
export default function useDisableButtonInModalFilters({ disabled }: Params) {
  const { mutate } = useModal()

  useMounted(() => {
    mutate({ 'acceptButtonProps.disabled': disabled })
  }, [disabled])
}
