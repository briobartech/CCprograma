import { createContext, useState } from 'react'
import { palette1 } from '../utils/colors'

export const AppContext = createContext()

export function AppContextProvider ({ children }) {
  const [currentSection, setCurrentSection] = useState('home')
  const palettes = [palette1]
  const [palette,setPalette] = useState(palettes[0])


  const value = {
    currentSection,
    setCurrentSection,
    palette,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
