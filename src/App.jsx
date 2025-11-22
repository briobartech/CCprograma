import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import './App.css'
import Inicio from './components/Inicio.jsx'
import styled from 'styled-components'
function App () {
  return (
    <AppStyled>
      <section className='NavBarSection'>
        <NavBar />
      </section>
      <section className='MainSection'>
        <Inicio />
      </section>
      
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  .MainSection {
    width: 100%;
    height: calc(100vh - 120px);
  }
`
