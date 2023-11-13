// Interfaces
import { ModalState } from './interfaces'

export type ModalPayload = Omit<ModalState, 'isShowing'>
