// Librarys
import Image from 'next/image'

export default function Seller() {
  return (
    <div className="seller flex items-start mt-2 gap-x-2 px-3 py-1.5 bg-gray-100 rounded-lg dark:bg-gray-600">
      <Image
        width={30}
        height={30}
        objectFit="cover"
        alt="seller-photo"
        className="min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] rounded-full border-gray-400"
        src="https://boo-prod.b-cdn.net/Wns3xFYDebZ8FiVtaIiRN6Orw7M2/170363835758919615d8db742b46e600d3286c3ff430d.jpg"
      />

      <div className="leading-tight truncate" title="Imanol Enrique Sernaque Mena">
        <span className="font-semibold dark:text-gray-300">Vendido por:</span>
        <h6 className="font-poppins truncate dark:text-gray-300">Imanol Enrique Sernaque Mena</h6>
      </div>
    </div>
  )
}
