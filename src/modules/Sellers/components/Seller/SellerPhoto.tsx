// Librarys
import Image from 'next/image'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Constants
import { AVATAR_IMAGE } from '@data/images'

export default function SellerPhoto({ photo }: Pick<Seller, 'photo'>) {
  return (
    <div className="seller-photo flex items-center justify-center min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full border-[3px] border-gray-200 overflow-hidden shadow-lg dark:border-gray-500 bg-main-700">
      <Image
        width={100}
        height={100}
        alt="seller-photo"
        className="object-cover min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px]"
        src={photo?.url ?? AVATAR_IMAGE}
      />
    </div>
  )
}
