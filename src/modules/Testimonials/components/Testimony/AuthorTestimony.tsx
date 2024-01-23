// Components
import QuoteLeft from '@assets/icons/quote-left'
import QuoteRight from '@assets/icons/quote-right'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

// Utils
import truncate from '@utils/truncate'

export const TESTIMONY_LIMIT = 175

export interface AuthorTestimonyProps extends Pick<Testimony, 'testimony'> {
  showCompletedTestimony?: boolean
}

export default function AuthorTestimony({
  testimony,
  showCompletedTestimony
}: AuthorTestimonyProps) {
  return (
    <div className="wrapper-author-testimony px-4">
      <QuoteLeft size="xl" className="text-main-700 dark:text-rose-300" />

      <i className="font-lexend text-justify px-3 py-3.5 dark:text-white">
        {showCompletedTestimony ? testimony : truncate(testimony, TESTIMONY_LIMIT)}
      </i>

      <div className="flex justify-end">
        <QuoteRight size="xl" className="text-main-700 dark:text-rose-300" />
      </div>
    </div>
  )
}
