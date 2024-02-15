// Components
import CreatedAt from './CreatedAt'
import ActionButton from './ActionButton'
import UbigeoFields from './UbigeoFields'
import ReadTestimony from './ReadTestimony'
import TestimonyPhoto from './TestimonyPhoto'
import AuthorTestimony from './AuthorTestimony'
import AuthorName from './UbigeoFields/AuthorName'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export default function Testimony(props: Testimony) {
  return (
    <article className="relative testimony animate__animated animate__fadeIn animate__slow bg-white shadow-2xl border-[3px] border-gray-300 rounded-lg pt-4 pb-[0.95rem] px-2.5 sm:px-3.5 dark:shadow-none dark:bg-dark-800 dark:border-gray-500/90 flex flex-col text-[0.92rem] shadow-blue-200 h-full">
      {props.userId && <ActionButton testimony={props} />}

      <div className="flex gap-x-2.5 mb-4 px-4 testimony-header items-center">
        <TestimonyPhoto photo={props.photo} />

        <div className="testimony-header-content justify-center font-poppins leading-snug text-[1rem] truncate">
          <AuthorName author={props.author} />

          <UbigeoFields
            region={props.region}
            country={props.country}
            province={props.province}
            district={props.district}
          />

          <CreatedAt createdAt={props.createdAt} />
        </div>
      </div>

      <AuthorTestimony testimony={props.testimony} />

      <ReadTestimony {...props} />
    </article>
  )
}
