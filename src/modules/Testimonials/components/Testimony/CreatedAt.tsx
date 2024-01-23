// Librarys
import dayjs from '@libs/dayjs'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export default function CreatedAt({ createdAt }: Pick<Testimony, 'createdAt'>) {
  return (
    <span className="mt-1 block text-[0.9rem] text-gray-500 dark:text-gray-300 break-word whitespace-break-spaces">
      Añadido el {dayjs(createdAt).format('D [de] MMMM [del] YYYY')}
    </span>
  )
}
