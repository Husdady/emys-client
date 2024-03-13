// Librarys
import { memo } from 'react'
import { PagesProgressBar } from 'next-nprogress-bar'

const options = { showSpinner: false }

function ProgressBar() {
  return <PagesProgressBar height="3px" color="#3498db" options={options} shallowRouting />
}

export default memo(ProgressBar)
