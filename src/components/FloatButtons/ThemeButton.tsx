// Components
import Button from '@components/Button'

// Hooks
import useTheme from '@hooks/useTheme'

// Utils
import classnames from '@utils/classnames'

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      title=""
      onClick={toggleTheme}
      className={classnames([
        theme,
        'btn-float-theme rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-sky-100 dark:bg-gray-600 border-2 border-sky-200 dark:border-gray-400'
      ])}
    />
  )
}
