/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import useReloadButton from './useReloadProducts'

// Utils
import ReloadButton from '@components/ReloadButton'

export default function ReloadProducts() {
  const { onReload, isFetching } = useReloadButton()
  return <ReloadButton onClick={onReload} isShowingSpin={isFetching} />
}
