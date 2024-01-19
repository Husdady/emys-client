// Interfaces
import { ModalTitleProps } from './interfaces'

export default function ModalTitle({ title, icon }: ModalTitleProps) {
  return (
    <span className="flex items-center text-main-700 dark:text-main-200 gap-x-2 tracking-wide">
      {icon}

      <b className="modal-title-message text-lg font-lato leading-[1.27rem] lg:leading-snug">{title}</b>
    </span>
  )
}
