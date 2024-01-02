// Components
import Button from '@components/Button'
import HeartRegular from '@assets/icons/heart-regular'

export default function Heart() {
  return (
    <Button
      title=""
      icon={<HeartRegular size="smd" />}
      className="!p-2 rounded-full !absolute left-[initial] right-2 top-2 dark:bg-gray-600 dark:text-gray-400 hover:bg-rose-200 hover:text-red-700 dark:hover:bg-pink-300 dark:hover:text-pink-900 z-[99999]"
    />
  )
}
