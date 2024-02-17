// Librarys
import React from 'react'

// Components
import ArrowUpCircle from '@assets/icons/arrow-up-circle'
import PagePlaceholder from './Placeholders/PagePlaceholder'
import ButtonPlaceholder from './Placeholders/ButtonPlaceholder'

// Hooks
import usePagination from './hooks/usePagination'

// Interfaces
import { PaginationProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Constants
import { customTitle, PaginationProps as Props } from './constants'

// Lazy Components
const Page = lazy(() => import('./Page'))
const Button = lazy(() => import('@components/Button'))

const Pagination: React.FC<PaginationProps> = ({
  total = Props.TOTAL,
  perPage = Props.PER_PAGE,
  currentPage = Props.CURRENT_PAGE,
  prev,
  next,
  totalDocs,
  isFetching,
  onChange,
  className,
  ...props
}: PaginationProps) => {
  const pagination = usePagination({
    ...props,
    total: total,
    perPage: perPage,
    currentPage: currentPage,
    defaultTotal: Props.TOTAL,
    onChange: onChange
  })

  return (
    <section
      className={classnames([className, 'pagination w-full flex flex-col mt-3 xl:mt-1.5 gap-y-2'])}
    >
      <div className='flex justify-center'>
        <span className="limits-wrapper font-semibold text-[0.75rem] py-2 border border-gray-300 dark:border-gray-500 border-l-[5px] px-3 rounded-tr rounded-br ml-1 bg-white dark:bg-gray-800 border-l-main-700 text-black dark:border-l-rose-200 dark:text-gray-300">
          <span className="sm:leading-snug block">
            Límite de &apos;{perPage}&apos; {'documento'.concat(perPage === 1 ? '' : 's')} por
            página &nbsp;|&nbsp; Mostrando &apos;{totalDocs}&apos;{' '}
            {'documento'.concat(total === 1 ? '' : 's')} en la página{' '}
            {String(currentPage).padStart(2, '0')} &nbsp;|&nbsp; Existen un total de &apos;{total}
            &apos; documentos registrados
          </span>
        </span>
      </div>

      <div className="pagination-paginator w-full flex justify-center">
        <div className="w-full sm:w-[initial] py-[0.35rem] px-2 bg-white dark:bg-dark-800 flex shadow rounded-md gap-x-4 text-[0.86rem]">
          <React.Suspense fallback={<ButtonPlaceholder />}>
            <Button
              title="Anterior"
              className="btn-prev-page"
              icon={<ArrowUpCircle size="sm" className="-rotate-90" />}
              disabled={isFetching === true || prev === null}
              onClick={pagination.onPrev}
              customTitle={customTitle}
            />
          </React.Suspense>

          <div className="pagination-labels flex items-center gap-x-2 font-poppins text-gray-500 dark:text-gray-400 truncate">
            <span className="page-label">Página</span>

            <span className="pagination-pages flex items-center gap-x-2">
              <React.Suspense fallback={<PagePlaceholder />}>
                <Page
                  onChange={onChange}
                  value={currentPage}
                  totalPages={pagination.totalPages}
                  isFetching={isFetching === true}
                />
              </React.Suspense>

              <span className="page-label">de</span>

              <span className="max-pagination-page flex items-center justify-center text-gray-600 font-semibold px-1.5 bg-gray-200 rounded min-w-[1.75rem] min-h-[1.75rem] text-center dark:bg-dark-800 dark:text-gray-300">
                {pagination.maxPage}
              </span>
            </span>

            <span>en Total</span>
          </div>

          <React.Suspense fallback={<ButtonPlaceholder />}>
            <Button
              title="Siguiente"
              className="btn-next-page"
              icon={<ArrowUpCircle size="sm" className="rotate-90" />}
              disabled={isFetching === true || next === null}
              onClick={pagination.onNext}
              customTitle={customTitle}
            />
          </React.Suspense>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Pagination, (prevProps, nextProps) => {
  return prevProps.isFetching === nextProps.isFetching
})
