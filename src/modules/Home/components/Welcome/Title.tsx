// Librarys
import { memo } from 'react'

// Utils
import classnames from '@utils/classnames'

// Constants
import { APP_NAME } from '@config/envs'
import { Mansalva } from '@root/src/assets/data/fonts'

function Title() {
  return (
    <h4 className="main-title break-word text-[2.5rem] mb-4 font-poppins leading-tight font-semibold text-indigo-500">
      Bienvenid@ a{' '}
      <span
        className={classnames([
          'app-name text-pink-500 text-[3rem] white-shadow',
          Mansalva.className
        ])}
      >
        {APP_NAME}
      </span>
      ,{' '}
      <span className={classnames(['text-green-600 text-[3rem] white-shadow', Mansalva.className])}>
        Variedad
      </span>{' '}
      y{' '}
      <span className={classnames(['text-blue-400 text-[3rem] white-shadow', Mansalva.className])}>
        Calidad
      </span>{' '}
      a buen precio
    </h4>
  )
}

export default memo(Title)
