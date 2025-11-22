import { createContext } from 'react'

export const AppContext = createContext()

export function AppContextProvider ( props ) {
  return (
    <AppContext.Provider value={props}>{props.children}</AppContext.Provider>
  )
}
