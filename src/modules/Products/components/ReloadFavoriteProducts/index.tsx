/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import useReloadFavoriteProducts from './useReloadFavoriteProducts'

// Utils
import ReloadButton from '@components/ReloadButton'

export default function ReloadFavoriteProducts() {
  const { onReload, isFetching } = useReloadFavoriteProducts()
  return <ReloadButton onClick={onReload} isShowingSpin={isFetching} />
}
