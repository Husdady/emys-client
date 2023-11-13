// Librarys
import { combineReducers } from 'redux'

// Global states
import { modalSlice } from './states/modal'
import { themeSlice } from './states/theme.state'

const reducers = combineReducers({
  // Slices
  [modalSlice.name]: modalSlice.reducer,
  [themeSlice.name]: themeSlice.reducer
})

export default reducers
