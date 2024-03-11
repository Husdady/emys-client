// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { LoaderResponse } from '@config/interfaces'

// Lazy Components
const LinkToLogin = dynamic(() => import('@modules/Auth/components/LinkToLogin'))
const LinkToRegister = dynamic(() => import('@modules/Auth/components/LinkToRegister'))
const ResetPasswordForm = dynamic(() => import('@modules/Auth/components/ResetPasswordForm'))

export default function ResetPasswordLayout(props: LoaderResponse) {
  return (
    <>
      <ResetPasswordForm {...props} />

      <div className="pt-3">
        <LinkToRegister />
        <LinkToLogin />
      </div>
    </>
  )
}
