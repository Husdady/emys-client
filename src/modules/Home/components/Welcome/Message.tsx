// Librarys
import { memo } from 'react'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Components
import CircleCheck from '@components/Icons/CircleCheck'

// Utils
import classnames from '@utils/classnames'

function Message() {
  const { ref, animationClassName } = useAnimationInView('animate__fadeIn animate__slow')

  return (
    <q
      ref={ref}
      className={classnames([
        animationClassName,
        'welcome-message relative font-semibold text-[1.1rem] text-indigo-700 bg-white block py-2 px-3 rounded-bl-xl rounded-br-xl shadow-xl font-lexend dark:text-indigo-200 dark:bg-gray-800 dark:font-normal'
      ])}
    >
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
