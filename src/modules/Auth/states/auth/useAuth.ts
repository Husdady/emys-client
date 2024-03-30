// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from '@hooks/useRedux'

// Actions
import { authActions } from '@modules/Auth/states/auth'

// Interfaces
import { User, AuthPayload, AuthContext } from '@modules/Auth/states/auth/interfaces'

/**
 * Hook that returns the authenticated user
 * @return {AuthContext}
 */
export default function useAuth(): AuthContext {
  const dispatch = useDispatch() // Get dispatch
  const auth = useSelector((state) => state.auth) // Get auth state

  // Get actions
  const actions = useMemo(
    () => ({
      // Authenticate user
      authenticate: (cond: boolean) => dispatch(authActions.authenticate(cond)),

      // Logout from the app
      signOut: () => dispatch(authActions.signOut()),

      // Login at the app
      signIn: function (payload: AuthPayload) {
        dispatch(authActions.signIn(payload))
      },

      // Update user information
      updateUser: function (user: Partial<User>) {
        return dispatch(authActions.updateUser(user))
      }
    }),
    []
  )

  return { ...auth, ...actions }
}
