import {applyMiddleware, createStore} from "redux"
import {initialState, rootReducer, RootState} from "@/state/reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import {useMemo} from "react"
import thunk from "redux-thunk"

let store:any


function initStore(preloadedState:RootState=initialState) {
  store =  createStore(rootReducer,preloadedState, composeWithDevTools(applyMiddleware(thunk)))
  return store
}

export const initializeStore = (preloadedState:RootState) => {
  let _store = store ?? initStore(preloadedState)

  if ( preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}



export function useStore(initialState:RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}



