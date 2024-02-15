// Librarys
import {
  showFloatInfoMessage,
  hideFloatMessageByKey,
  showFloatLoadingMessage,
  showFloatWarningMessage
} from '@libs/antd/message'

// Hooks
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import { useLazyGetTestimonialsQuery } from '@modules/Testimonials/api/graphql'
import useDisableButtonInModalFilters from '@hooks/useDisableButtonInModalFilters'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useModal from '@hooks/useModal'

// Interfaces
import { Option } from '@components/Select/interfaces'
import { TestimonialsFiltersState } from './interfaces'
import { TestimonialsPaginationArgs } from '@modules/Testimonials/api/interfaces'

// Utils
import { showMask, hideMask } from '@utils/mask'
import isEmptyString from '@utils/isEmptyString'
import hasSameObjectData from '@utils/hasSameObjectData'
import createSortByFilter from '@utils/createSortByFilter'
import createSortBySelectedOption from '@utils/createSortBySelectedOption'

// Constants
import { QUERY } from '@libs/graphql/constants'
import { PARAMS } from '@modules/Testimonials/api/constants'
import {
  LOADING_FILTERS,
  ERROR_MESSAGE_FILTERS,
  SUCCESS_MESSAGE_FILTERS,
  FILTERING_TESTIMONIALS
} from './constants'

/**
 * Hook that implements the filters of the Testimonials
 */
export default function useTestimonialsFilters() {
  const { hideModal } = useModal()
  const [trigger] = useLazyGetTestimonialsQuery({}) // Get trigger callback

  // Get query filters
  const { query, createQueryParams, deleteQueryParam } =
    useFiltersQuery<TestimonialsPaginationArgs>({ queryParamsFields: PARAMS })

  // Define the default values
  const defaultValues = useMemo(
    () => ({
      region: query.region,
      sortBy: query.sortBy,
      country: query.country,
      province: query.province,
      district: query.district,
      sortType: query.sortType,
      authorName: query.authorName ?? ''
    }),
    [query]
  )

  // Register form
  const { watch, register, setValue, getValues, handleSubmit } = useForm<TestimonialsFiltersState>({
    defaultValues: defaultValues
  })

  // Define the sort by selected option
  const sortBySelectedOption = useMemo(
    () => createSortBySelectedOption(query),
    [query.sortBy, query.sortType]
  )

  // Clear seeker value
  const clearSeeker = useCallback(() => {
    setValue('authorName', '', { shouldDirty: false }) // Clear seeker value
  }, [])

  // Show clear icon
  const isShowingClearIcon = useMemo(() => {
    const authorName = watch('authorName') // Get authorName value
    return !isEmptyString(authorName ?? '') // Show clear icon when authorName has value
  }, [watch('authorName')])

  // Event 'change' in Provinces Select component
  const onChangeSortBy = useCallback((option: Option) => {
    createSortByFilter(option)({ setValue: setValue })
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async ({ authorName, ...state }: TestimonialsFiltersState) => {
      hideModal() // Hide modal
      showMask() // Show mask in the screen
      showFloatLoadingMessage(LOADING_FILTERS) // Show float message

      // Define arguments for the filtering
      const args: TestimonialsPaginationArgs = {
        ...state,
        page: QUERY.page,
        authorName: isEmptyString(authorName) ? undefined : authorName
      }

      const response = await trigger(args) // Filter testimonials
      hideFloatMessageByKey(FILTERING_TESTIMONIALS) // Hide float message
      hideMask() // Hide mask from the screen

      // Show float error message
      if ('error' in response) {
        return showFloatWarningMessage(ERROR_MESSAGE_FILTERS)
      }

      createQueryParams(args as Record<string, unknown>) // Create query params
      if (isEmptyString(authorName)) return // Some filter not exists

      // Show float success message
      return showFloatInfoMessage(SUCCESS_MESSAGE_FILTERS)
    },
    [createQueryParams]
  )

  useDisableButtonInModalFilters({
    disabled: hasSameObjectData(watch(), defaultValues)
  })

  return {
    watch: watch,
    submit: submit,
    setValue: setValue,
    register: register,
    getValues: getValues,
    clearSeeker: clearSeeker,
    handleSubmit: handleSubmit,
    onChangeSortBy: onChangeSortBy,
    deleteQueryParam: deleteQueryParam,
    isShowingClearIcon: isShowingClearIcon,
    sortBySelectedOption: sortBySelectedOption
  }
}
