import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider ({ children }) {
  const [currentSection, setCurrentSection] = useState('home')

  const value = {
    currentSection,
    setCurrentSection
  }

  return (
    <AppContext.Provider value={{currentSection,setCurrentSection}}>{children}</AppContext.Provider>
  )
}
