// Librarys
import React from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { LoginRememberProps } from './interfaces'

// Constants
import { FORGOT_PASSWORD_PATH } from '@data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Checkbox = dynamic(() => import('@components/Checkbox'))

const customLabel = {
  className:
    'font-lexend tracking-wide text-[0.82rem] dark:font-normal dark:!text-gray-300 whitespace-nowrap'
}

const Remember: React.FC<LoginRememberProps> = ({ remember, onRemember }: LoginRememberProps) => {
  return (
    <div className="remember flex justify-between gap-x-4 gap-y-2 overflow-hidden">
      <Checkbox
        checkColor="#ffffff"
        label="Almacenar datos"
        inputClassName="checked:!bg-pink-500 dark:border-gray-600 dark:checked:!bg-pink-600"
        customLabel={customLabel}
        onToggle={onRemember}
        checked={remember}
      />

      <Link
        href={FORGOT_PASSWORD_PATH}
        className="text-sm font-semibold text-main-700 dark:text-pink-300 hover:underline whitespace-nowrap"
      >
        ¿Contraseña olvidada?
      </Link>
    </div>
  )
}

export default React.memo(Remember, (prevProps, nextProps) => {
  return prevProps.remember === nextProps.remember
})
