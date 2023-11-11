// Librarys
import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Components
import CircleCheck from '@assets/icons/circle-check'
import CircleArrowLeft from '@assets/icons/circle-arrow-left'

// Constants
import { APP_NAME } from '@config/envs'

// Images
import woman from '@assets/images/woman.webp'

// Dynamic Components

function Welcome() {
  return (
    <section className="header-welcome flex items-center mt-[6rem] justify-around xl:justify-between max-w-[1000px] mx-auto">
      <div className="header-inner-welcome max-w-[500px] mb-[3rem] mt-[2.25rem]">
        <h4 className="main-title break-word text-[2.5rem] mb-4 font-lexend leading-tight font-semibold text-indigo-500">
          Bienvenid@ a {APP_NAME} a buen precio
        </h4>

        <q className="welcome-message relative font-semibold text-[1.1rem] text-indigo-700 bg-white block py-2 px-3 rounded-bl-xl rounded-br-xl shadow-xl font-lexend">
          <CircleCheck size="xl" className="absolute top-[-10px] right-[-10px] text-lime-600" />

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
        width={380}
        height={290}
        src={woman.src}
        className="header-welcome-image relative left-[6%] xl:left-[3%] min-w-[380px] min-h-[290px]"
      />
    </section>
  )
}

export default memo(Welcome)
