// Components
import Empty from './Empty'
import Result from './Result'
import CircleXmarkSolid from '@assets/icons/circle-xmark-solid'

// Hooks
import useCalculateSeparatorHeight from './useCalculateSeparatorHeight'

// Interfaces
import { ResultsProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function Results({ data, hideResults, navigationSeekerRef }: ResultsProps) {
  useCalculateSeparatorHeight()

  return (
    <div className="navigation-seeker-container">
      <div id="navigation-results-separator"></div>

      <div
        ref={navigationSeekerRef}
        className="navigation-seeker lg:min-w-[350px] overflow-y-auto pl-5 pr-3 bg-white dark:bg-dark-800"
      >
        <h5 className="flex items-center gap-x-5 justify-between text-base font-semibold dark:font-normal font-poppins dark:text-gray-400 pt-4 pb-3 border-b-[3px] border-gray-300 dark:border-gray-700 leading-snug">
          <span>Resultados encontrados: {data.length}</span>

          <CircleXmarkSolid
            size="sm"
            role="button"
            useHoverEffect
            onClick={hideResults}
            className="clear-icon mxs mr-3 text-gray-400"
          />
        </h5>

        <ul className="navigation-seeker-results py-1 mt-2 mb-5 border-b-[3px] border-gray-300 dark:border-gray-700">
          {isEmptyArray(data) && <Empty />}

          {data.map((result, i) => (
            <Result key={i} {...result} hideResults={hideResults} />
          ))}
        </ul>
      </div>
    </div>
  )
}
