// Librarys
import {
  showFloatInfoMessage,
  showFloatLoadingMessage,
  showFloatWarningMessage,
  hideFloatMessageByKey
} from '@libs/antd/message'

// Hooks
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import { useLazyGetSellersQuery } from '@modules/Sellers/api/graphql'
// import useDesktopScreen from '@hooks/useDesktopScreen'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useMobileScreen from '@hooks/useMobileScreen'

// Types
import type { FilterProps } from '@components/Select/types'

// Interfaces
import { SellersFiltersState } from './interfaces'
import { Option } from '@components/Select/interfaces'
import { SellersPaginationArgs } from '@modules/Sellers/api/interfaces'
import { SearchFilterProps } from '@components/SearchFilter/interfaces'

// Utils
import { hideMask, showMask } from '@utils/mask'
import isEmptyString from '@utils/isEmptyString'
import getQueryParam from '@utils/getQueryParam'
import createSortByFilter from '@utils/createSortByFilter'
import createUbigeoArgs from '@modules/Ubigeo/utils/createUbigeoArgs'
import createSortBySelectedOption from '@utils/createSortBySelectedOption'
import createDefaultUbigeo from '@modules/Ubigeo/utils/createDefaultUbigeo'

// Constants
import { NULLABLE } from '@components/Select/constants'
import { emailLabel, phoneLabel } from '@assets/data/filters-labels'
import { PARAMS, DEFAULT_QUERY } from '@modules/Sellers/api/constants'
import {
  LOADING_FILTERS,
  FILTERING_SELLERS,
  ERROR_MESSAGE_FILTERS,
  SUCCESS_MESSAGE_FILTERS
} from './constants'

/**
 * Hook that implements the filters of the Sellers
 */
export default function useSellersFilters() {
  const isMobileScreen = useMobileScreen()
  // const isDesktopScreen = useDesktopScreen()
  const [trigger] = useLazyGetSellersQuery({}) // Get trigger callback

  // Get query filters
  const { query, createQueryParams, deleteQueryParam } = useFiltersQuery<SellersPaginationArgs>({
    queryParamsFields: PARAMS
  })

  // Register form
  const { watch, register, setValue, getValues, handleSubmit } = useForm<SellersFiltersState>({
    defaultValues: {
      dni: query.dni,
      ruc: query.ruc,
      email: query.email,
      phone: query.phone,
      status: query.status,
      fullname: query.fullname,
      sortBy: query.sortBy,
      sortType: query.sortType,
      ...createDefaultUbigeo(query)
    }
  })

  // Define the sort by selected option
  const sortBySelectedOption = useMemo(
    () => createSortBySelectedOption(query),
    [query.sortBy, query.sortType]
  )

  // Callback for execute manually the submit event
  const onFilter = useCallback(() => {
    void handleSubmit(submit)()
  }, [])

  // Callback for execute manually the submit event
  const handlePressEnter = useCallback(
    (field: keyof SellersFiltersState) => () => {
      // Prevent make request if has invalid search value
      if ((!query[field] && isEmptyString(watch(field))) || watch(field) === query[field]) return
      onFilter() // Executes submit event
    },
    [query, watch()]
  )

  // Check if is showing the clear icon
  const isShowingClearIcon = useCallback(
    (field: keyof SellersFiltersState) => {
      const q = watch(field) // Get 'q' value
      return !isEmptyString(q ?? '') // Show clear icon when 'q' has value
    },
    [watch()]
  )

  // Clear search value
  const clearSearchValue = useCallback(
    (field: keyof SellersFiltersState) => () => {
      setValue(field, '', { shouldDirty: false }) // Clear seeker value
      const querySearch = getQueryParam(field) // Get query param
      if (querySearch === null) return // Check if exists query param
      onFilter() // Execute submit event
    },
    []
  )

  // Event 'change' in Status Select component
  const onChangeStatus = useCallback((option: Option) => {
    const type = option.value // Get type value

    // Update filter 'status'
    setValue('status', type === NULLABLE ? undefined : type)
    onFilter() // Execute submit event
  }, [])

  // Event 'change' in Sort by Select component
  const onChangeSortBy = useCallback((option: Option) => {
    createSortByFilter(option)({ setValue: setValue })
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async (state: SellersFiltersState) => {
    showMask() // Show mask in the screen
    showFloatLoadingMessage(LOADING_FILTERS) // Show float message

    const { dni, ruc, email, phone, fullname, status } = state

    // Define arguments for the filtering
    const args: SellersPaginationArgs = {
      page: DEFAULT_QUERY.page,
      dni: isEmptyString(dni) ? undefined : dni,
      ruc: isEmptyString(ruc) ? undefined : ruc,
      email: isEmptyString(email) ? undefined : email,
      phone: isEmptyString(phone) ? undefined : phone,
      status: isEmptyString(status) ? undefined : status,
      fullname: isEmptyString(fullname) ? undefined : fullname,
      ...createUbigeoArgs(state)
    }

    const response = await trigger(args) // Filter users
    hideFloatMessageByKey(FILTERING_SELLERS) // Hide float message
    hideMask() // Hide mask from the screen

    // Show float error message
    if ('error' in response) {
      return showFloatWarningMessage(ERROR_MESSAGE_FILTERS)
    }

    createQueryParams(args as Record<string, unknown>) // Create query params

    // Check if all search filters fields are empty
    const allSearchFiltersAreEmpty = [dni, ruc, email, phone, fullname].every((item) =>
      isEmptyString(item)
    )

    // Empty filter fields
    if (allSearchFiltersAreEmpty) return

    // Show float success message
    return showFloatInfoMessage(SUCCESS_MESSAGE_FILTERS)
  }, [])

  // Define the status field
  const statusField = useMemo<FilterProps>(
    () => ({
      onChange: onChangeStatus,
      selectedValue: getValues('status')
    }),
    [getValues, onChangeStatus]
  )

  // Define the email field
  const emailField = useMemo<SearchFilterProps>(
    () => ({
      customInput: register('email'),
      onClear: clearSearchValue('email'),
      onPressEnter: handlePressEnter('email'),
      isShowingClearIcon: isShowingClearIcon('email'),
      placeholder: 'Buscar vendedores por correo electrónico...',
      ...emailLabel
    }),
    [onFilter, register, handlePressEnter, clearSearchValue, isShowingClearIcon]
  )

  // Define the phone field
  const phoneField = useMemo<SearchFilterProps>(
    () => ({
      type: 'number',
      customInput: register('phone'),
      onClear: clearSearchValue('phone'),
      onPressEnter: handlePressEnter('phone'),
      isShowingClearIcon: isShowingClearIcon('phone'),
      placeholder: 'Buscar vendedores por número telefónico...',
      ...phoneLabel
    }),
    [onFilter, register, handlePressEnter, clearSearchValue, isShowingClearIcon]
  )

  return {
    watch: watch,
    submit: submit,
    onFilter: onFilter,
    register: register,
    setValue: setValue,
    getValues: getValues,
    emailField: emailField,
    phoneField: phoneField,
    statusField: statusField,
    handleSubmit: handleSubmit,
    onClear: clearSearchValue,
    onChangeStatus: onChangeStatus,
    onChangeSortBy: onChangeSortBy,
    handlePressEnter: handlePressEnter,
    isMobileScreen: isMobileScreen,
    // isDesktopScreen: isDesktopScreen,
    deleteQueryParam: deleteQueryParam,
    isShowingClearIcon: isShowingClearIcon,
    sortBySelectedOption: sortBySelectedOption
  }
}
