// Components
import Loading from '@components/Loading'
import BoxWrapper from '@components/Wrapper'

export default function ProductLoading() {
  return (
    <BoxWrapper className='mx-6 sm:mx-[3rem]'>
      <Loading title="Cargando datos del producto..." />
    </BoxWrapper>
  )
}
