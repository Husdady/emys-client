// Components
import AppLogo from '@root/src/components/AppLogo'

// Interfaces
import { AuthLayoutProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function AuthLayout({ children, className, containerClassName }: AuthLayoutProps) {
  return (
    <section
      id="auth-content"
      className={classnames([
        className,
        'pt-[5.5rem] pb-[2.5rem] sm:pt-[7.5rem] xl:pt-[8.5rem] sm:pb-[5rem] xl:pb-[4rem] flex flex-col items-center justify-center h-full'
      ])}
    >
      <section
        className={classnames([
          containerClassName,
          'auth-container overflow-hidden relative w-full max-w-sm bg-white rounded-2xl border-4 border-gray-200 shadow-2xl px-5 pt-[0.15rem] pb-3 mx-auto dark:bg-gray-900 dark:border-gray-600 dark:shadow-none'
        ])}
      >
        <AppLogo />
        {children}
      </section>
    </section>
  )
}
