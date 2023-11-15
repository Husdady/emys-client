// Librarys
import Switch from 'antd/lib/switch'

// Hooks
import { useCallback } from 'react'
import useTheme from '@hooks/useTheme'

// Constants
import { DARK, LIGHT } from './constants'

export const style = {
  display: 'block',
  marginLeft: 'auto'
}

export default function SwitchTheme() {
  const { setTheme, isLightTheme } = useTheme()

  // Event 'onChange' in Switch component for change current theme
  const handleOnChange = useCallback((isActive: boolean) => {
    if (!isActive) return setTheme(DARK)
    setTheme(LIGHT)
  }, [])

  return (
    <Switch
      style={style}
      checked={isLightTheme}
      onChange={handleOnChange}
      className="select-theme"
    />
  )
}
