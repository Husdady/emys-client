// Librarys
import localFont from 'next/font/local'
import { Mansalva as MansalvaFont } from 'next/font/google'

// Utils
import classnames from '@utils/classnames'

export const Mansalva = MansalvaFont({ subsets: ['latin'], weight: ['400'] })

export const Lato = localFont({
  variable: '--lato-regular',
  src: '../../../public/fonts/Lato-Regular.woff2'
})

export const Lexend = localFont({
  variable: '--lexend-regular',
  src: '../../../public/fonts/Lexend-Regular.woff2'
})

export const Poppins = localFont({
  variable: '--poppins-regular',
  src: '../../../public/fonts/Poppins-Regular.woff2'
})

const fonts = classnames([Lato.className, Lexend.variable, Poppins.variable])
export default fonts
