// Librarys
import { Fragment, Suspense } from 'react'

// Interfaces
import { ModalFooterProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function ModalFooter({
  custom,
  onCancel,
  onAccept,
  acceptButtonProps,
  cancelButtonProps,
  isShowingAcceptButton = true,
  isShowingCancelButton = true
}: ModalFooterProps) {
  if (custom !== null) return <Fragment>{custom}</Fragment>

  return (
    <div className="flex flex-wrap justify-end gap-y-[0.4rem] gap-x-[0.5rem]">
      {isShowingCancelButton && (
        <Suspense fallback={null}>
          <Button
            title="Cancelar"
            onClick={onCancel}
            {...cancelButtonProps}
            className={classnames([
              cancelButtonProps?.className,
              'btn-cancel-modal !py-[0.65rem] !px-4 text-gray-500 !rounded-[0.35rem] font-semibold bg-gray-200 dark:bg-gray-600 dark:text-gray-300 hover:opacity-60'
            ])}
          />
        </Suspense>
      )}

      {isShowingAcceptButton && (
        <Suspense fallback={null}>
          <Button
            title="Aceptar"
            onClick={onAccept}
            {...acceptButtonProps}
            className={classnames([
              acceptButtonProps?.className,
              'btn-accept-modal !py-[0.65rem] !px-4 text-white !rounded-[0.35rem] bg-main-700 dark:bg-main-400 gap-x-2 hover:opacity-60'
            ])}
          />
        </Suspense>
      )}
    </div>
  )
}
