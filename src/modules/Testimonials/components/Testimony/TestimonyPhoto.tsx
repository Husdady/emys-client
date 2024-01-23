// Librarys
import Image from 'next/image'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

// Images
import avatarImage from '@assets/images/avatar.webp'

export default function TestimonyPhoto({ photo }: Pick<Testimony, 'photo'>) {
  return (
    <div className="testimony-photo flex items-center justify-center min-h-[80px] min-w-[80px] max-h-[80px] max-w-[80px] rounded-full border-[3px] border-gray-200 overflow-hidden shadow-lg dark:border-gray-500 bg-main-700">
      <Image
        width={100}
        height={100}
        alt="testimony-photo"
        className="object-cover min-h-[80px] min-w-[80px] max-h-[80px] max-w-[80px]"
        src={photo?.url ?? avatarImage.src}
      />
    </div>
  )
}
