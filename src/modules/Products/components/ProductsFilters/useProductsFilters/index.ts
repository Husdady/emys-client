// Librarys
import {
  showFloatInfoMessage,
  showFloatLoadingMessage,
  showFloatWarningMessage,
  hideFloatMessageByKey
} from '@libs/antd/message'

// Hooks
import useModal from '@config/store/states/modal/useModal'
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import { useLazyGetProductsQuery } from '@modules/Products/api/graphql'
import useDisableButtonInModalFilters from '@hooks/useDisableButtonInModalFilters'
import useFiltersQuery from '@hooks/useFiltersQuery'

// Interfaces
import { ProductsFiltersState } from './interfaces'
import { Option } from '@components/Select/interfaces'
import { ProductsPaginationArgs } from '@modules/Products/api/interfaces'
import { ChangeOptionParams } from '@components/GroupRadioButton/interfaces'

// Utils
import { showMask, hideMask } from '@utils/mask'
import isString from '@utils/isString'
import isNumber from '@utils/isNumber'
import isBoolean from '@utils/isBoolean'
import isEmptyString from '@utils/isEmptyString'
import hasSameObjectData from '@utils/hasSameObjectData'
import createSortByFilter from '@utils/createSortByFilter'
import createSortBySelectedOption from '@utils/createSortBySelectedOption'
import handleChangePrice from '@components/FilterByPriceRange/utils/handleChangePrice'
import handleChangePriceRange from '@components/FilterByPriceRange/utils/handleChangePriceRange'
import checkDisabledFilterButton from '@components/FilterByPriceRange/utils/checkDisabledFilterButton'

// Constants
import { NULLABLE } from '@components/Select/constants'
import { MAX, MIN } from '@components/FilterByPriceRange/constants'
import { PARAMS, DEFAULT_QUERY } from '@modules/Products/api/constants'
import { ALL } from '@modules/Products/components/ProductsFilters/ProductType/constants'
import {
  LOADING_FILTERS,
  FILTERING_PRODUCTS,
  ERROR_MESSAGE_FILTERS,
  SUCCESS_MESSAGE_FILTERS
} from './constants'

/**
 * Hook that implements the filters of the Testimonials
 * @param {ProductType} type Product type
 */
export default function useProductsFilters() {
  const { hideModal } = useModal()
  const [trigger] = useLazyGetProductsQuery({}) // Get trigger callback

  // Get query filters
  const { query, createQueryParams } = useFiltersQuery<ProductsPaginationArgs>({
    queryParamsFields: PARAMS
  })

  // Define the default values
  const defaultValues = useMemo(
    () => ({
      type: query.type,
      sortBy: query.sortBy,
      code: query.code ?? '',
      sortType: query.sortType,
      maker: query.maker ?? '',
      countryId: query.countryId,
      categories: query.categories,
      productName: query.productName ?? '',
      minPrice: String(!isNumber(query.minPrice) ? MIN : query.minPrice),
      maxPrice: String(!isNumber(query.maxPrice) ? MAX : query.maxPrice),
      isInStock: !isBoolean(query.isInStock) ? undefined : String(query.isInStock),
      totalUnits: (!isNumber(query.totalUnits) ? undefined : String(query.totalUnits)) ?? ''
    }),
    [query]
  )

  // Register form
  const { watch, register, setValue, getValues, handleSubmit } = useForm<ProductsFiltersState>({
    defaultValues: {
      sortBy: query.sortBy,
      type: query.type ?? ALL,
      sortType: query.sortType,
      categories: query.categories,
      productName: query.productName,
      minPrice: String(!isNumber(query.minPrice) ? MIN : query.minPrice),
      maxPrice: String(!isNumber(query.maxPrice) ? MAX : query.maxPrice),
      isInStock: !isBoolean(query.isInStock) ? undefined : String(query.isInStock)
    }
  })

  // Define the sort by selected option
  const sortBySelectedOption = useMemo(
    () => createSortBySelectedOption(query),
    [query.sortBy, query.sortType]
  )

  // Check if is disabled the button for apply price filters
  const isDisableApplyPriceFilterButton = useMemo(
    () =>
      checkDisabledFilterButton({
        minPrice: watch('minPrice'),
        maxPrice: watch('maxPrice'),
        query: { minPrice: query.minPrice, maxPrice: query.maxPrice }
      }),
    [watch('minPrice'), watch('maxPrice'), query.minPrice, query.maxPrice]
  )

  // Callback for execute manually the submit event
  const onFilter = useCallback(() => {
    void handleSubmit(submit)()
  }, [])

  // Callback for change a Select value
  const change = useCallback(
    (field: keyof ProductsFiltersState) => (option: Option) => {
      const type = option.value // Get type value

      // Update field
      setValue(field, type === NULLABLE ? undefined : type)
    },
    []
  )

  // Callback for change the price range
  const onChangePriceRange = useCallback((values: Array<number | null>) => {
    handleChangePriceRange({ values: values, setValue: setValue, fields: ['minPrice', 'maxPrice'] })
  }, [])

  // Callback for change a Select value
  const changePrice = useCallback(
    (field: keyof Pick<ProductsFiltersState, 'minPrice' | 'maxPrice'>) =>
      (value: number | null) => {
        handleChangePrice({
          value: value,
          field: field,
          setValue: setValue,
          fields: ['minPrice', 'maxPrice'],
          minPrice: Number(watch('minPrice')),
          maxPrice: Number(watch('maxPrice'))
        })
      },
    [watch('minPrice'), watch('maxPrice')]
  )

  // Clear search value
  const clearSearchValue = useCallback(
    (field: keyof ProductsFiltersState) => () => {
      setValue(field, '', { shouldDirty: false }) // Clear seeker value
    },
    [onFilter]
  )

  // Check if is showing the clear icon
  const isShowingClearIcon = useCallback(
    (field: keyof ProductsFiltersState) => {
      const q = watch(field) // Get 'q' value
      return !isEmptyString(q ?? '') // Show clear icon when 'q' has value
    },
    [watch()]
  )

  // Event 'change' in Sort by Select component
  const onChangeSortBy = useCallback((option: Option) => {
    createSortByFilter(option)({ setValue: setValue })
  }, [])

  // Callback for check if a category is actived (highlighted)
  const isActiveCategory = useCallback(
    (categoryId: string) => {
      return watch('categories')?.includes(categoryId) ?? false
    },
    [watch('categories')]
  )

  // Callback for filter products for some categories picked
  const toggleCategoryId = useCallback(
    (categoryId: string) => () => {
      const categories = watch('categories') ?? [] // Get current categories

      // Check if the category already exists
      const hasCategoryId = categories.some((category) => category === categoryId)

      // Define the new categories
      let newCategories = [...categories]

      if (hasCategoryId) {
        newCategories = newCategories.filter((item) => item !== categoryId)
      } else {
        newCategories.push(categoryId)
      }

      setValue('categories', newCategories) // Update categories
    },
    [watch('categories')]
  )

  // Callback for change the product type
  const onChangeProductType = useCallback((params: ChangeOptionParams) => {
    setValue('type', params.currentOption.value as string)
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async ({
      type,
      minPrice,
      maxPrice,
      isInStock,
      productName,
      ...state
    }: ProductsFiltersState) => {
      hideModal() // Hide modal
      showMask() // Show mask in the screen
      showFloatLoadingMessage(LOADING_FILTERS) // Show float message

      // Define arguments for the filtering
      const args: ProductsPaginationArgs = {
        page: DEFAULT_QUERY.page,
        type: type === ALL || isEmptyString(type) ? undefined : type,
        productName: isEmptyString(productName) ? undefined : productName,
        minPrice: !isString(minPrice) || isEmptyString(minPrice) ? undefined : Number(minPrice),
        maxPrice: !isString(maxPrice) || isEmptyString(maxPrice) ? undefined : Number(maxPrice),
        isInStock:
          !isString(isInStock) || isEmptyString(isInStock) ? undefined : isInStock === 'true',
        ...state
      }

      const response = await trigger(args) // Filter users
      hideFloatMessageByKey(FILTERING_PRODUCTS) // Hide float message
      hideMask() // Hide mask from the screen

      // Show float error message
      if ('error' in response) {
        return showFloatWarningMessage(ERROR_MESSAGE_FILTERS)
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      createQueryParams(args as any) // Create query params

      // Show float success message
      return showFloatInfoMessage(SUCCESS_MESSAGE_FILTERS)
    },
    []
  )

  useDisableButtonInModalFilters({
    disabled: hasSameObjectData(watch(), defaultValues)
  })

  return {
    watch: watch,
    submit: submit,
    change: change,
    register: register,
    getValues: getValues,
    changePrice: changePrice,
    handleSubmit: handleSubmit,
    onClear: clearSearchValue,
    onChangeSortBy: onChangeSortBy,
    isActiveCategory: isActiveCategory,
    toggleCategoryId: toggleCategoryId,
    onChangePriceRange: onChangePriceRange,
    isShowingClearIcon: isShowingClearIcon,
    onChangeProductType: onChangeProductType,
    sortBySelectedOption: sortBySelectedOption,
    isDisableApplyPriceFilterButton: isDisableApplyPriceFilterButton
  }
}
