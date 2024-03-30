// Librarys
import { current, createSlice } from '@reduxjs/toolkit'

// Types
import type { PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { PlaceholderState, UpdatePlaceholderPayload } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

export const PLACEHOLDER_KEY = 'placeholder'

const initialState: PlaceholderState = {
  placeholder: {}
}

export const placeholderSlice = createSlice({
  name: PLACEHOLDER_KEY,
  initialState: initialState,
  reducers: {
    // Update placeholder state
    updatePlaceholder: (
      state,
      action: PayloadAction<UpdatePlaceholderPayload>
    ): PlaceholderState => {
      const { data, placeholderId } = action.payload // Get payload
      const trasformedState = current(state.placeholder) // Transform the current state
      const placeholder = trasformedState[placeholderId] // Get placeholder by id

      // Placeholder not exists
      if (isUndefined(placeholder)) {
        state.placeholder[placeholderId] = data // Set placeholder data
      } else {
        // Update data of the placeholder
        Object.assign(state.placeholder, {
          [placeholderId]: data
        })
      }

      return state
    }
  }
})

// Export actions
export const placeholderActions = placeholderSlice.actions
export default placeholderSlice.reducer // Export reducer
