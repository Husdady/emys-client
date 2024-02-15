/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import ReloadButton from '@components/ReloadButton'

// Hooks
import useReloadTestimonials from './useReloadTestimonials'

export default function ReloadTestimonials() {
  const { onReload, isFetching } = useReloadTestimonials()
  return <ReloadButton onClick={onReload} isShowingSpin={isFetching} />
}
