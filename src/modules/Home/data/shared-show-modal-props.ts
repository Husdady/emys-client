// Interfaces
import { ModalState } from '@config/store/states/modal/interfaces'

const sharedShowModalProps: Partial<ModalState> = {
  width: 500,
  icon: null,
  isShowingAcceptButton: false,
  cancelButtonProps: {
    title: 'Ocultar modal'
  }
}

export default sharedShowModalProps
