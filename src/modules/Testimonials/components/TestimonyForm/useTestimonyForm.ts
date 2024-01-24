/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import useDisableButtonInModalForm from '@hooks/useDisableButtonInModalForm'
import useAutoAdjustFooterButtons from '@components/Modal/hooks/useAutoAdjustFooterButtons'
import useModal from '@hooks/useModal'

// Interfaces
import { Option } from '@components/Select/interfaces'
import { ChangeParams } from '@components/Upload/interfaces'
import { TestimonyFormState, TestimonyFormProps } from './interfaces'

// Constants
import { DEFAULT_VALUES } from './constants'

export default function useTestimonyForm({
  defaultValues = DEFAULT_VALUES,
  onSubmit
}: TestimonyFormProps) {
  const { mutate } = useModal()
  const {
    watch,
    register,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm<TestimonyFormState>({
    defaultValues: defaultValues
  })

  // Event that update the author photo
  const onChangeAuthorPhoto = useCallback((params: ChangeParams) => {
    setValue('authorPhoto', params.file)
    setValue('previewAuthorPhoto', params.previewFile)
  }, [])

  // Event that remove the author photo
  const onRemoveAuthorPhoto = useCallback(() => {
    setValue('authorPhoto', undefined)
    setValue('previewAuthorPhoto', undefined)
  }, [])

  // Callback for change a option
  const change = useCallback(
    (field: keyof TestimonyFormState) => (option: Option | null) => {
      const value = option !== null ? option.value : null
      setValue(field, value)
      clearErrors(field)
    },
    []
  )

  // Callback for change the region id
  const handleChangeRegionId = useCallback(
    (option: Option) => {
      change('regionId')(option)
      change('provinceId')(null)
    },
    [watch('provinceId')]
  )

  // Callback for change the country id
  const handleChangeCountryId = useCallback((option: Option) => {
    change('regionId')(null)
    change('provinceId')(null)
    change('countryId')(option)
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async (formState: TestimonyFormState) => {
      await onSubmit({ state: formState, setError: setError }) // Execute submit event
      mutate({ 'acceptButtonProps.isShowingSpin': false }) // Hide spin in button
    },
    [defaultValues]
  )

  useAutoAdjustFooterButtons()
  useDisableButtonInModalForm<TestimonyFormState>(errors)

  return {
    watch: watch,
    errors: errors,
    change: change,
    submit: submit,
    register: register,
    handleSubmit: handleSubmit,
    onChangeAuthorPhoto: onChangeAuthorPhoto,
    onRemoveAuthorPhoto: onRemoveAuthorPhoto,
    handleChangeRegionId: handleChangeRegionId,
    handleChangeCountryId: handleChangeCountryId
  }
}
