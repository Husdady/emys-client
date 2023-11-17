// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import CircleCheck from '@assets/icons/circle-check'
import CircleArrowLeft from '@assets/icons/circle-arrow-left'

// Utils
import classnames from '@utils/classnames'

// Constants
import { APP_NAME } from '@config/envs'
import { Mansalva } from '@assets/fonts'

// Images
import woman from '@assets/images/woman.webp'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const WelcomeTopWave = dynamic(() => import('./waves/welcome-top-wave'))
const WelcomeBottomWave = dynamic(() => import('./waves/welcome-bottom-wave'))

function Welcome() {
  return (
    <>
      <section className="welcome relative overflow-hidden min-h-[300px] bg-pink-200">
        <div className="main-wrapper-welcome max-w-[1300px] mx-auto px-[3rem] overflow-hidden relative z-[9999]">
          <div className="main-inner-welcome flex items-center mt-[7.75rem] justify-around xl:justify-between max-w-[1000px] mx-auto">
            <div className="welcome-content max-w-[500px] mb-[3rem]">
              <h4 className="main-title break-word text-[2.5rem] mb-4 font-lexend leading-tight font-semibold text-indigo-500">
                Bienvenid@ a{' '}
                <span
                  className={classnames([
                    'app-name text-pink-500 text-[3rem] white-shadow',
                    Mansalva.className
                  ])}
                >
                  {APP_NAME}
                </span>
                ,{' '}
                <span
                  className={classnames([
                    'text-green-600 text-[3rem] white-shadow',
                    Mansalva.className
                  ])}
                >
                  Variedad
                </span>{' '}
                y{' '}
                <span
                  className={classnames([
                    'text-blue-400 text-[3rem] white-shadow',
                    Mansalva.className
                  ])}
                >
                  Calidad
                </span>{' '}
                a buen precio
              </h4>
              <q className="welcome-message relative font-semibold text-[1.1rem] text-indigo-700 bg-white block py-2 px-3 rounded-bl-xl rounded-br-xl shadow-xl font-lexend dark:text-indigo-200 dark:bg-gray-800 dark:font-normal">
                <div className="absolute top-[-10px] right-[-10px] bg-lime-500 rounded-full w-[27px] h-[27px] sm:w-[24px] sm:h-[24px] flex items-center justify-center">
                  <CircleCheck size="smaller" className="circle-check text-white" />
                </div>

                <span>
                  Aquí encontrarás una gran variedad de productos de buena calidad, principalmente
                  productos para la salud y el cuidado personal, entre otros productos.
                </span>
              </q>
              <Link
                href="/productos"
                title="Navegar a la sección de productos"
                className="btn-see-all-products py-3.5 px-[2rem] inline-flex items-center font-poppins outline outline-1 outline-indigo-600 place-self-start mt-[2rem] bg-indigo-500 border-2 border-indigo-700 shadow-xl text-white hover:bg-violet-500 hover:border-indigo-200 hover:outline-indigo-600 !gap-x-2.5 rounded-full tracking-wide !gap-x-3"
              >
                <CircleArrowLeft className="stroke-[4] text-cyan-200 animate-circle-arrow-left" />
                <span>Ver todos los productos</span>
              </Link>
            </div>

            <Image
              alt="woman"
              width={330}
              height={250}
              src={woman.src}
              className="welcome-image relative left-[6%] xl:left-[3%] min-w-[330px] min-h-[250px]"
            />
          </div>
        </div>

        <WelcomeTopWave />
      </section>

      <WelcomeBottomWave />
    </>
  )
}

export default memo(Welcome)
