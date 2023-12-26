// Librarys
import { memo } from 'react'

// Components
import CircleCheck from '@assets/icons/circle-check'

function Message() {
  return (
    <q className="welcome-message relative font-semibold text-[1.1rem] text-indigo-700 bg-white block py-2 px-3 rounded-bl-xl rounded-br-xl shadow-xl font-lexend dark:text-indigo-200 dark:bg-gray-800 dark:font-normal">
      <div className="absolute top-[-10px] right-[-10px] bg-lime-500 rounded-full w-[27px] h-[27px] sm:w-[24px] sm:h-[24px] flex items-center justify-center">
        <CircleCheck size="smaller" className="circle-check text-white" />
      </div>

      <span>
        Aquí encontrarás una gran variedad de productos de buena calidad, principalmente productos
        para la salud y el cuidado personal, entre otros productos.
      </span>
    </q>
  )
}

export default memo(Message)
