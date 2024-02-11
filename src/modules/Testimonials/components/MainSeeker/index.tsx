// Librarys
import { Suspense } from 'react'

// Components
import MainSeeker from '@components/MainSeeker'
import MainSeekerFallback from '@components/MainSeeker/Fallback'

// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'

export default function CustomMainSeeker(
  props: Pick<
    InputTextProps,
    'value' | 'onClear' | 'onChange' | 'onPressEnter' | 'isShowingClearIcon' | 'containerClassName'
  >
) {
  return (
    <Suspense fallback={<MainSeekerFallback className={props.containerClassName} />}>
      <MainSeeker {...props} placeholder="Buscar testimonios por datos del autor..." />
    </Suspense>
  )
}
