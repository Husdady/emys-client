// Librarys
import { memo } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LOGIN_PATH } from '@data/paths'
import { customTitle, sharedClassName } from './constants'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Login = dynamic(() => import('@components/Icons/Login'))
const Button = dynamic(() => import('@components/Button'))

function SessionButton() {
  const pathname = usePathname()

  return (
    <div>
      {pathname !== LOGIN_PATH && (
        <Link
          href={LOGIN_PATH}
          title="Iniciar sesión en emys.pe"
          className={classnames([
            sharedClassName,
            'min-w-[162px] max-h-[34px] hover:text-pink-900 border-pink-600 dark:outline-[0.1rem] hover:font-semibold hover:bg-pink-100 hover:border-rose-800 hover:outline-gray-300 hover:outline-[0.12rem] dark:outline-pink-200 dark:bg-rose-200 dark:hover:bg-pink-300 dark:hover:border-pink-100 dark:!text-rose-900 dark:font-semibold'
          ])}
        >
          <Login size="sm" />
          <span>Iniciar sesión</span>
        </Link>
      )}

      {pathname === LOGIN_PATH && (
        <Button
          disabled
          title="Iniciar sesión"
          icon={<Login size="sm" />}
          customTitle={customTitle}
          className={classnames([sharedClassName, 'border-main-700'])}
        />
      )}
    </div>
  )
}

export default memo(SessionButton)
