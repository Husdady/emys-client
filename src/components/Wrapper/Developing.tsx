// Librarys
import Image from 'next/image'

// Images
import developingImg from '@assets/images/developing-content.webp'

export default function Developing() {
  return (
    <div className="developing-content py-4 px-3 sm:py-8 sm:px-6 w-full overflow-x-auto">
      <Image
        width={400}
        height={400}
        src={developingImg.src}
        className="block mb-4 mx-auto min-w-[250px]"
        alt="developing"
        loading="lazy"
      />

      <div className="flex items-center justify-center gap-x-3 text-gray-500">
        <h5 className="text-lg text-inherit font-lato font-semibold text-center leading-tight">
          Actualmente esta sección se encuentra bajo desarrollo...
        </h5>
      </div>
    </div>
  )
}
