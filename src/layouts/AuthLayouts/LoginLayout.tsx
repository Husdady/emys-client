// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const LoginForm = dynamic(() => import('@modules/Auth/components/LoginForm'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))

const LinkToForgottenEmailRecovery = dynamic(
  () => import('@modules/Auth/components/LinkToForgottenEmailRecovery')
)

export default function LoginLayout() {
  return (
    <>
      <LoginForm />

      <div className="px-2 pb-2 pt-3">
        <LinkToForgottenEmailRecovery />
        <LinkToRegister />
      </div>
    </>
  )
}
