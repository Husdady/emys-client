/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import ReloadButton from '@components/ReloadButton'

// Hooks
import useReloadSellers from './useReloadSellers'

export default function ReloadSellers() {
  const { onReload, isFetching } = useReloadSellers()
  return <ReloadButton onClick={onReload} isShowingSpin={isFetching} />
}
