// Librarys
import Switch from 'antd/lib/switch'

// Hooks
import useSwitchTheme from './useSwitchTheme'

export default function SwitchTheme() {
  const { isLightTheme, handleChangeTheme } = useSwitchTheme()

  return (
    <Switch
      checked={isLightTheme}
      onChange={handleChangeTheme}
      className="select-theme block ml-auto"
    />
  )
}
