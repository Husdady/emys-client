// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import CircleArrowLeft from '@assets/icons/circle-arrow-left'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

function SeeAllProducts() {
  return (
    <Link
      href="/productos"
      title="Navegar a la sección de productos"
      className="btn-see-all-products py-3.5 sm:py-3 px-[2rem] inline-flex items-center font-poppins outline outline-1 outline-indigo-600 mt-[2rem] bg-indigo-500 border-2 border-indigo-700 shadow-xl text-white hover:bg-violet-500 hover:border-indigo-200 hover:outline-indigo-600 !gap-x-2.5 rounded-full tracking-wide !gap-x-3 text-[0.94rem]"
    >
      <CircleArrowLeft className="stroke-[4] text-cyan-200 animate-circle-arrow-left" />
      <span>Ver todos los productos</span>
    </Link>
  )
}

export default memo(SeeAllProducts)
