// Components
import Loading from '@components/Loading'
import BoxWrapper from '@components/Wrapper'

export default function ProductLoading() {
  return (
    <BoxWrapper className='mx-2 sm:mx-3 md:mx-6 xl:mx-[3.63rem]'>
      <Loading title="Cargando datos del producto..." />
    </BoxWrapper>
  )
}
