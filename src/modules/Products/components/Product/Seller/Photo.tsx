// Librarys
import Image from 'next/image'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Images
import avatarImage from '@assets/images/avatar.webp'

export default function SellerPhoto({ photo }: Pick<Seller, 'photo'>) {
  return (
    <div className="bg-gray-200 min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] rounded-full border border-gray-400 overflow-hidden bg-main-700 flex items-center justify-center">
      <Image
        width={30}
        height={30}
        alt="seller-photo"
        className="object-cover min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px]"
        src={photo?.url ?? avatarImage.src}
      />
    </div>
  )
}
