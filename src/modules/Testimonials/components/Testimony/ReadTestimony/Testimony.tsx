// Components
import CreatedAt from '@modules/Testimonials/components/Testimony/CreatedAt'
import UbigeoFields from '@modules/Testimonials/components/Testimony/UbigeoFields'
import TestimonyPhoto from '@modules/Testimonials/components/Testimony/TestimonyPhoto'
import AuthorTestimony from '@modules/Testimonials/components/Testimony/AuthorTestimony'
import AuthorName from '@modules/Testimonials/components/Testimony/UbigeoFields/AuthorName'

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
    <article>
      <div className="flex gap-x-2.5 mb-4 px-4 testimony-header items-center">
        <TestimonyPhoto photo={photo} />

        <div className="testimony-header-content justify-center font-poppins leading-snug text-[1rem]">
          <AuthorName author={author} />
          <UbigeoFields region={region} country={country} province={province} district={district} />
          <CreatedAt createdAt={createdAt} />
        </div>
      </div>

      <AuthorTestimony testimony={testimony} showCompletedTestimony />
    </article>
  )
}
