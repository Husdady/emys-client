// Librarys
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

// Dynamic components
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const AppLogo = dynamic(() => import('@modules/Auth/components/AppLogo'))

export default function AuthLayout({ children }: OnlyChildrenProp) {
  return (
    <main
      id="auth-content"
      className="pt-[5.5rem] pb-[2.5rem] sm:pt-[8.5rem] sm:pb-[5rem] flex flex-col items-center justify-center h-full min-h-[100vh]"
    >
      <section className="auth-container overflow-hidden relative w-full max-w-sm bg-white rounded-2xl border-4 border-gray-200 shadow-2xl px-5 pt-[0.15rem] pb-3 mx-auto dark:bg-gray-900 dark:border-gray-600 dark:shadow-none">
        <Suspense fallback={null}>
          <div className="pt-4">
            <SwitchTheme />
          </div>
        </Suspense>

        <Suspense fallback={null}>
          <AppLogo />
        </Suspense>

        {children}
      </section>
    </main>
  )
}
