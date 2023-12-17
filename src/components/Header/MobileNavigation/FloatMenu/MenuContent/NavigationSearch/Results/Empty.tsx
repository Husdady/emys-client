// Components
import FaceFrown from '@assets/icons/face-frown'

export default function Empty() {
  return (
    <div className="empty-results py-4 flex flex-col items-center justify-center gap-y-2 text-gray-600 dark:text-gray-400">
      <FaceFrown size="xxxl" />
      <span className="font-poppins font-semibold dark:font-normal">Sin resultados...</span>
    </div>
  )
}
