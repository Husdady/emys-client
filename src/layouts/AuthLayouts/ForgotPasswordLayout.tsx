// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))
const ForgotPasswordForm = dynamic(() => import('@modules/Auth/components/ForgotPasswordForm'))

const LinkToForgottenEmailRecovery = dynamic(
  () => import('@modules/Auth/components/LinkToForgottenEmailRecovery')
)

export default function ForgotPasswordLayout() {
  return (
    <div>
      <ForgotPasswordForm />

      <div className="pt-3">
        <LinkToForgottenEmailRecovery />
        <LinkToRegister />
        <LinkToLogin />
      </div>
    </div>
  )
}
