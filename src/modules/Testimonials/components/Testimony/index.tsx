// Components
import CreatedAt from './CreatedAt'
import UbigeoFields from './UbigeoFields'
import ReadTestimony from './ReadTestimony'
import TestimonyPhoto from './TestimonyPhoto'
import AuthorTestimony from './AuthorTestimony'
import AuthorName from './UbigeoFields/AuthorName'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export default function Testimony({
  photo,
  author,
  region,
  country,
  province,
  district,
  testimony,
  createdAt
}: Testimony) {
  return (
    <article className="testimony animate__animated animate__fadeIn animate__slow bg-white shadow-2xl border-[3px] border-gray-300 rounded-lg pt-4 pb-[0.95rem] px-2.5 sm:px-3.5 dark:shadow-none dark:bg-dark-800 dark:border-gray-500/90 flex flex-col text-[0.92rem] shadow-blue-200 h-full">
      <div className="flex gap-x-2.5 mb-4 px-4 testimony-header items-center">
        <TestimonyPhoto photo={photo} />

        <div className="testimony-header-content justify-center font-poppins leading-snug text-[1rem] truncate">
          <AuthorName author={author} />
          <UbigeoFields region={region} country={country} province={province} district={district} />
          <CreatedAt createdAt={createdAt} />
        </div>
      </div>

      <AuthorTestimony testimony={testimony} />

      <ReadTestimony
        photo={photo}
        author={author}
        region={region}
        country={country}
        province={province}
        district={district}
        testimony={testimony}
        createdAt={createdAt}
      />
    </article>
  )
}
