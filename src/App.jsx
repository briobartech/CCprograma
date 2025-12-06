import { Outlet, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'
import styled from 'styled-components'

function App () {
  const location = useLocation()
  const { currentSection, setCurrentSection } = useContext(AppContext)

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home'
    setCurrentSection(path)
  }, [location, setCurrentSection])

  return (
    <AppStyled $section={currentSection}>
      <section className='NavBarSection'>
        <NavBar />
      </section>
      <MainSectionStyled className='MainSection'>
        <Outlet key={location.pathname} />
      </MainSectionStyled>
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  .NavBarSection {
  height: 60px;
  }
  position: relative;
  width: 100%;
  min-width: 100%;height: 100vh;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${props =>
      props.$section === 'about'
        ? '/BG.jpg'
        : props.$section === 'services'
        ? '/BG.jpg'
        : props.$section === 'contact'
        ? '/BG.jpg'
        : '/BG3.jpg'});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: ${props => props.$bgOpacity || 1};
    transition: opacity 0.4s ease, background-image 0.4s ease-in-out;
    z-index: -1;
  }
`

const MainSectionStyled = styled.section`
  width: 100%;
  height: calc(100vh - 120px);

  > * {
    animation: fadeIn 0.4s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
