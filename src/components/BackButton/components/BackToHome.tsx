// Components
import BackButton from '@components/BackButton'

// Constants
import { HOME_PATH } from '@data/paths'

export default function BackToHome() {
  return (
    <BackButton
      path={HOME_PATH}
      title="Volver al Inicio"
      className="xs:max-w-[200px] md:max-w-[175px]"
    />
  )
}
