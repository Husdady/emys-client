// Librarys
import Switch from 'antd/lib/switch'

// Hooks
import useSwitchTheme from './useSwitchTheme'

export const style = {
  display: 'block',
  marginLeft: 'auto'
}

export default function SwitchTheme() {
  const { isLightTheme, handleChangeTheme } = useSwitchTheme()

  return (
    <Switch
      style={style}
      checked={isLightTheme}
      onChange={handleChangeTheme}
      className="select-theme"
    />
  )
}
