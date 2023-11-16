// Librarys
import dynamic from 'next/dynamic'

// Lazy Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const RegisterForm = dynamic(() => import('@modules/Auth/components/RegisterForm'))

export default function RegisterLayout() {
  return (
    <>
      <RegisterForm />

      <div className="pb-2 pt-3">
        <LinkToLogin />
      </div>
    </>
  )
}
