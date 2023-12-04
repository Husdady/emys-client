// Components
import LoginForm from '@modules/Auth/components/LoginForm'
import LinkToRegister from '@modules/Auth/components/LinkToRegister'
import LinkToForgottenEmailRecovery from '@modules/Auth/components/LinkToForgottenEmailRecovery'

export default function LoginLayout() {
  return (
    <>
      <LoginForm />

      <div className="pb-2 pt-3">
        <LinkToForgottenEmailRecovery />
        <LinkToRegister />
      </div>
    </>
  )
}
