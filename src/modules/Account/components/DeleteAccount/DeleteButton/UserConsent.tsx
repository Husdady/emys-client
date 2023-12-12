// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Note = dynamic(() => import('./Note'))
const ConfirmForm = dynamic(() => import('@modules/Account/components/DeleteAccount/ConfirmForm'))

export default function UserConsent() {
  return (
    <>
      <Note />
      <ConfirmForm />
    </>
  )
}
