// Librarys
import Switch from 'antd/lib/switch'

// Hooks
import { useCallback } from 'react'
import useTheme from '@hooks/useTheme'

// Styles
import './styles.scss'

export const style = {
  display: 'block',
  marginLeft: 'auto'
}

export default function SwitchTheme() {
  const { theme, switchTheme } = useTheme()

  // Event 'onChange' in Switch component for change current theme
  const handleOnChange = useCallback((isActive: boolean) => {
    if (!isActive) return switchTheme('dark')
    switchTheme('light')
  }, [])

  return (
    <Switch
      style={style}
      onChange={handleOnChange}
      checked={theme === 'light'}
      className="select-theme"
    />
  )
}
