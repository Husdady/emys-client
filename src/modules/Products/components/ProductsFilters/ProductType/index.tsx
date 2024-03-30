// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@root/src/components/GroupRadioButton/Fallback'

// Utils
import lazy from '@utils/lazy'

// Constants
import { options, fallbackConfig, PRODUCT_TYPES } from './constants'
import { GroupRadioButtonProps } from '@components/GroupRadioButton/interfaces'

// Lazy Components
const GroupRadioButton = lazy(() => import('@components/GroupRadioButton'))

type ProductTypeProps = Pick<GroupRadioButtonProps, 'onChange' | 'defaultOption'>

export default function ProductType(props: ProductTypeProps) {
  return (
    <Suspense fallback={<Fallback classLabel="w-44" config={fallbackConfig} />}>
      <GroupRadioButton
        {...props}
        options={options}
        name={PRODUCT_TYPES}
        textLabel="Selecciona el tipo de producto"
      />
    </Suspense>
  )
}
