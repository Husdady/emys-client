// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export default function AuthorName({ author }: Pick<Testimony, 'author'>) {
  return (
    <div className="author-name-wrapper flex gap-x-1">
      <span className="text-gray-500 dark:text-gray-300">Autor:</span>
      <h5 className="author-name font-semibold dark:text-white dark:font-normal">{author}</h5>
    </div>
  )
}
