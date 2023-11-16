// Librarys
import dynamic from 'next/dynamic'

// Lazy Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))
const ResetPasswordForm = dynamic(() => import('@modules/Auth/components/ResetPasswordForm'))

export default function ResetPasswordLayout() {
  return (
    <>
      <ResetPasswordForm />

      <div className="pl-2 pr-2 pt-3">
        <LinkToRegister />
        <LinkToLogin />
      </div>
    </>
  )
}
