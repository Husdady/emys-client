// Hooks
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector
} from 'react-redux'

// Types
import type { RootState, AppDispatch } from '@config/store'

// Use throughout your app instead of plain 'useDispatch' and 'useSelector'
export const useDispatch: () => AppDispatch = useAppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
