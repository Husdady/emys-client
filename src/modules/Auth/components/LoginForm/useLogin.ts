// Hooks
import { useMemo } from 'react'
import { useSelector, useDispatch } from '@hooks/useRedux'

// Actions
import { loginActions } from '@modules/Auth/states/login'

// Types
import type { LoginPayload, LoginContext } from '@modules/Auth/states/login/interfaces'

export default function useLogin(): LoginContext {
  const dispatch = useDispatch() // Get dispatch
  const login = useSelector((state) => state.login) // Get login state

  // Get actions
  const actions = useMemo(
    () => ({
      // Toggle remember user's credentials
      toggleRemember: function () {
        dispatch(loginActions.toggleRemember())
      },

      // Save user's credentials
      saveLoginCredentials: function (payload: LoginPayload) {
        dispatch(loginActions.saveLoginCredentials(payload))
      }
    }),
    []
  )

  return {
    ...login,
    ...actions
  }
}
