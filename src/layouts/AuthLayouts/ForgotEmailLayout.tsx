// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))
const ForgotEmailForm = dynamic(() => import('@modules/Auth/components/ForgotEmailForm'))

export default function ForgotEmailLayout() {
  return (
    <div>
      <ForgotEmailForm />

      <div className="pt-3">
        <LinkToRegister />
        <LinkToLogin />
      </div>
    </div>
  )
}
