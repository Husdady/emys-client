/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import useReloadProducts from './useReloadProducts'

// Utils
import ReloadButton from '@components/ReloadButton'

export default function ReloadProducts() {
  const { onReload, isFetching } = useReloadProducts()
  return <ReloadButton onClick={onReload} isShowingSpin={isFetching} />
}
