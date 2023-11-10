// Librarys
import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Components
import CircleArrowLeft from '@assets/icons/circle-arrow-left'

// Constants
import { APP_NAME } from '@config/envs'

// Images
import woman from '@assets/images/woman.webp'

function Welcome() {
  return (
    <section className="header-welcome flex items-center mt-[1rem] justify-around xl:justify-between max-w-[1000px] mx-auto overflow-hidden">
      <div className="header-inner-welcome max-w-[500px] mb-[3rem] mt-[2.25rem]">
        <h4 className="main-title break-word text-[2.5rem] mb-4 font-lexend leading-tight font-semibold text-indigo-500">
          Bienvenid@ a {APP_NAME} a buen precio
        </h4>

        <q className="welcome-message font-semibold text-[1.1rem] text-indigo-700 bg-white block py-2 px-3 rounded-bl-xl rounded-br-xl shadow-xl font-lexend">
          Aquí encontrarás una gran variedad de productos de buena calidad, principalmente productos
          para la salud y el cuidado personal, entre otros tantos productos.
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
