// Librarys
import { current, createSlice } from '@reduxjs/toolkit'

// Types
import type { ModalPayload } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { ModalState } from './interfaces'
import { UnknownObj } from '@config/globalInterfaces'

// Utils
import leaf from '@utils/leaf'
import isObject from '@utils/isObject'

const initialState: ModalState = {
  title: '',
  footer: null,
  content: null,
  isShowing: false,
  onAccept: undefined,
  centered: undefined,
  isShowingAcceptButton: true,
  isShowingCancelButton: true,
  wrapClassName: undefined,
  acceptButtonProps: undefined,
  cancelButtonProps: undefined
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    // Show modal
    showModal: (state, action: PayloadAction<ModalPayload>) => {
      state.isShowing = true // Show modal
      Object.assign(state, action.payload) // Update modal
      return state
    },

    // Hide modal
    hideModal: (state) => {
      Object.assign(state, initialState)
      return state
    },

    // Mutate modal state
    mutate: (state, action: PayloadAction<UnknownObj>) => {
      const obj = JSON.parse(JSON.stringify(state)) // Parse state

      obj.icon = current(state).icon // Update modal icon
      obj.title = current(state).title // Update modal title
      obj.content = current(state).content // Update modal content
      obj.onAccept = current(state).onAccept // Update modal content

      // Define 'acceptButtonProps'
      if (!isObject(obj.acceptButtonProps)) {
        obj.acceptButtonProps = {}
      }

      // Validate 'icon' in Accept Button
      if (isObject(obj.acceptButtonProps)) {
        obj.acceptButtonProps.icon = current(state).acceptButtonProps?.icon // Update accept button
      }

      return leaf(obj, action.payload) as ModalState
    }
  }
})

export const modalActions = modalSlice.actions // Export actions
export default modalSlice.reducer // Export reducer
