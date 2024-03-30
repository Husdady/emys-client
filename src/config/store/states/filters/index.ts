// Librarys
import { current, createSlice } from '@reduxjs/toolkit'

// Types
import type { PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { FiltersState, UpdateCountPayload } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

export const FILTERS_KEY = 'filters'

const initialState: FiltersState = {
  filters: {}
}

export const filtersSlice = createSlice({
  name: FILTERS_KEY,
  initialState: initialState,
  reducers: {
    // Update count of documents filtered
    updateCount: (state, action: PayloadAction<UpdateCountPayload>): FiltersState => {
      const { count, filterId } = action.payload // Get payload
      const trasformedState = current(state.filters) // Transform the current state
      const filter = trasformedState[filterId] // Get filter by id

      // Filter not exists
      if (isUndefined(filter)) {
        state.filters[filterId] = count // Add count of the documents filtered
      } else {
        // Update count of the documents filtered
        Object.assign(state.filters, {
          [filterId]: count
        })
      }

      return state
    }
  }
})

// Export actions
export const filtersActions = filtersSlice.actions
export default filtersSlice.reducer // Export reducer
