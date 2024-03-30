/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Reload from '@components/Icons/Reload'
import ClipboardCopy from '@components/Icons/ClipboardCopy'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useSecretKey from './useSecretKey'

// Interfaces
import { SecretKeyProps } from './interfaces'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

const InputText = dynamic(() => import('@components/InputText'), {
  loading: () => <FallbackItem classLabel="w-24" />
})

const customSpin = {
  style: { width: '24px', height: '24px' }
}

export default function SecretKey({ secret, setValue, ...props }: SecretKeyProps) {
  const { copy, generate, isLoading } = useSecretKey({
    secret: secret,
    setValue: setValue
  })

  return (
    <div className="flex items-end gap-x-2 w-full">
      <InputText readOnly containerClassName="w-full" textLabel="Clave secreta" {...props} />

      <div className="flex items-center mb-[0.35rem] gap-x-1">
        <ClipboardCopy
          size="smd"
          onClick={copy}
          title="Copiar clave secreta al portapapeles"
          className="btn bg-zinc-200 !p-[0.40rem] rounded-md dark:bg-zinc-600 hover:cursor-pointer"
        />

        <Button
          title=""
          loadingTitle=""
          onClick={generate}
          customSpin={customSpin}
          isShowingSpin={isLoading}
          className="!p-[0.40rem] rounded-md bg-blue-500 dark:bg-blue-600"
          icon={
            <Reload
              size="smd"
              title="Generar nueva clave secreta"
              className="stroke-3 text-white hover:cursor-pointer"
            />
          }
        />
      </div>
    </div>
  )
}
