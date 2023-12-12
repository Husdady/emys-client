// Components
import CircleXmarkSolid from '@assets/icons/x'

// Hooks
import useNote from './useNote'

export default function Note() {
  const { hideNote, isShowingNote } = useNote()

  if (!isShowingNote) return null

  return (
    <div className="mb-4 bg-gray-100 dark:bg-gray-700/80 rounded-md px-3.5 pt-3 pb-4">
      <div className='flex items-center justify-between  mb-2'>
        <h5 className="text-green-600 dark:text-yellow-500 text-lg font-poppins font-semibold">
          *Aviso importante
        </h5>

        <CircleXmarkSolid useHoverEffect size="sm" className="relative left-[0.25rem] ml-3 clear-icon text-gray-400 dark:text-gray-400 flex items-center justify-center stroke-4 cursor-pointer p-1.5" onClick={hideNote} />
      </div>

      <p className="dark:text-gray-300 text-[0.95rem] leading-snug font-lexend tracking-tight">
        Antes de eliminar tu cuenta, necesitamos que nos proporciones tu contraseña para poder
        continuar. Además de completar un campo de verificación.
      </p>
    </div>
  )
}
