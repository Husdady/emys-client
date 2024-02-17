// Components
import Eye from '@assets/icons/eye'
import Button from '@components/Button'
import Tooltip from '@components/Tooltip'
import EyeOff from '@assets/icons/eye-off'

// Hooks
import useEyeButton from './useEyeButton'

export default function EyeButton() {
  const { isShowingHeader, toggleShowHeader } = useEyeButton()

  return (
    <Tooltip
      trigger={['hover']}
      title={isShowingHeader ? 'Ocultar navegación' : 'Mostrar navegación'}
    >
      <Button
        title=""
        onClick={toggleShowHeader}
        icon={isShowingHeader ? <Eye size="sm" /> : <EyeOff size="sm" />}
        className="btn-float-toggle-show-header rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-rose-500 dark:bg-rose-200 border-2 border-rose-400 dark:border-rose-100 text-white dark:text-rose-900"
      />
    </Tooltip>
  )
}
