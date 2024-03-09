// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'

// Constants
import { UNVERIFIED } from '@root/src/modules/Account/components/AccountStatus/allowedStatus'

// Dynamic Components
const BtnSendVerification = dynamic(() => import('./Button'))
const Separator = dynamic(() => import('@components/Separator'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function VerifyAccount() {
  const auth = useAuth()

  if (auth.user === null) return null
  if (auth.user.status !== UNVERIFIED) return null

  return (
    <>
      <Aside
        title="Verificar mi cuenta"
        className="items-center px-4 py-6 sm:px-6"
        titleClassName="text-neutral-600 dark:text-neutral-300"
        description="Envía una verificación a tu correo electrónico personal para verificar tu cuenta. Es importante que verifiques tu cuenta."
      >
        <BtnSendVerification />
      </Aside>

      <Separator />
    </>
  )
}
