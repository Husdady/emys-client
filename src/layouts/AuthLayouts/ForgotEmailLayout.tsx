// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))
const ForgotEmailForm = dynamic(() => import('@modules/Auth/components/ForgotEmailForm'))

export default function ForgotEmailLayout() {
  return (
    <>
      <ForgotEmailForm />

      <div className="pl-2 pr-2 pt-3">
        <LinkToRegister />
        <LinkToLogin />
      </div>
    </>
  )
}
