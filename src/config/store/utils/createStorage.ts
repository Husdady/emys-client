// Librarys
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// Utils
import createServerStorage from './createServerStorage'

/**
 * Create Async Storage for Server and Client side
 */
export default function createAsyncStorage() {
  return typeof window !== 'undefined' ? createWebStorage('local') : createServerStorage()
}
