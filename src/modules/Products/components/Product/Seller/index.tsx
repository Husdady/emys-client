// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { Image } from '@libs/axios/interfaces'
import { Seller as SellerModel } from '@modules/Sellers/api/interfaces'

// Dynamic Components
const SellerPhoto = dynamic(() => import('./Photo'))
const SellerFullname = dynamic(() => import('./Fullname'))

export default function Seller({ photo, fullname }: Partial<SellerModel> = {}) {
  return (
    <div className="seller flex flex-wrap gap-y-1 items-start mt-2 gap-x-1.5 px-3 py-2 bg-gray-100 rounded-lg dark:bg-gray-600">
      <SellerPhoto photo={photo as Image} />
      <SellerFullname fullname={fullname} />
    </div>
  )
}
