// Librarys
import { combineReducers } from 'redux'

// Global states
import { modalSlice } from './states/modal'

const reducers = combineReducers({
  // Slices
  [modalSlice.name]: modalSlice.reducer
})

export default reducers
