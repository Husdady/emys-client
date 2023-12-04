// Components
import Empty from './Empty'
import Result from './Result'
import CircleXmarkSolid from '@assets/icons/circle-xmark-solid'

// Hooks
import useCalculateSeparatorHeight from './useCalculateSeparatorHeight'

// Interfaces
import { ResultsProps } from './interfaces'

export default function Results({ data, hideResults }: ResultsProps) {
  useCalculateSeparatorHeight()

  return (
    <div className="navigation-seeker-container fixed top-0 left-0 right-0 bottom-0 z-[99999] w-full h-full ml-auto max-w-[calc(100%-22.5rem)] bg-[#00000073] dark:bg-[#a1a1aa4d]">
      <div id="navigation-results-separator"></div>

      <div className="navigation-seeker w-[50%] min-w-[350px] max-h-[27.65rem] overflow-y-auto max-w-[600px] pl-5 pr-3 bg-white dark:bg-dark-800">
        <h5 className="flex items-center justify-between text-base font-semibold dark:font-normal font-poppins dark:text-gray-400 pt-4 pb-3 border-b-[3px] border-gray-300 dark:border-gray-700">
          <span>Resultados encontrados: {data.length}</span>

          <CircleXmarkSolid
            size="sm"
            role="button"
            className="clear-icon mxs mr-3 text-gray-400"
            useHoverEffect
          />
        </h5>

        <ul className="navigation-seeker-results py-1 mt-2 mb-5 border-b-[3px] border-gray-300 dark:border-gray-700">
          {data.length === 0 && <Empty />}

          {data.map((result, i) => (
            <Result key={i} {...result} hideResults={hideResults} />
          ))}
        </ul>
      </div>
    </div>
  )
}
