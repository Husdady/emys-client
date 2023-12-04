// Components
import Select from '@components/Select'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useCountryList from '@modules/Ubigeo/hooks/useCountryList'

// Interfaces
import { CountriesProps } from './interfaces'

export default function Countries({ defaultCountryName, ...props }: CountriesProps) {
  const { options, isError, isFetching, isLoading } = useCountryList({
    addDefaultValue: false,
    onChangeCountry: props.onChange,
    defaultCountryName: defaultCountryName
  })

  if (isLoading || isFetching) return <FallbackItem classLabel="w-40" />

  return (
    <Select
      {...props}
      options={options}
      disabled={isError}
      canSearchOptions
      enableVirtualization
      noSelectionLabel="Selecciona un país"
      searchPalceholder="Buscar países..."
    />
  )
}
