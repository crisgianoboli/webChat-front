import { createContext, useContext, Dispatch } from 'react'

export const contextFactory = state => {
  const Context = createContext({
    state: { ...state },
    dispatch: () => Dispatch({}),
  })

  const useSelector = selector => {
    const { state } = useContext(Context)
    return selector(state)
  }

  const useDispatch = () => {
    const { dispatch } = useContext(Context)
    return dispatch
  }

  return { useSelector, Context, useDispatch }
}
