import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'

function NavBar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentSection = useContext(AppContext).currentSection;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <LogoLink to='/' onClick={closeMenu}>
        <Logo src='/logo-color-fondo-transparente.png' alt='Logo CC' />
      </LogoLink>

      {currentSection !== 'home' ? (
        <>
          <BurgerButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerButton>

          <Menu $isOpen={isMenuOpen}>
            <MenuItem to='/' onClick={closeMenu}>Inicio</MenuItem>
            <MenuItem to='/about' onClick={closeMenu}>Nosotros</MenuItem>
            <MenuItem to='/services' onClick={closeMenu}>Servicios</MenuItem>
            <MenuItem to='/contact' onClick={closeMenu}>Contacto</MenuItem>
            <MenuItem to='/content' onClick={closeMenu}>Noticias</MenuItem>
          </Menu>

          {isMenuOpen && <Overlay onClick={closeMenu} />}
        </>
      ) : null}
    </Nav>
  )
}

export default NavBar

/* Styled components: posicionamos el Nav fijo en la parte superior
     y dejamos el logo en la esquina superior izquierda con tamaño estándar */
const Nav = styled.nav`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.5rem;
  box-sizing: border-box;
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 50%, #eff2f9 100%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  position: relative;
`

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  z-index: 1002;
`

const Logo = styled.img`
  height: 48px; /* tamaño estándar */
  width: auto;
  display: block;
  margin: 0;
  user-select: none;
  transition: transform 200ms ease, filter 200ms ease;
  ${LogoLink}:hover & {
    transform: translateY(-2px) scale(1.02);
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));
  }
`

const BurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  span {
    width: 100%;
    height: 3px;
    background: #333;
    border-radius: 10px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${props => props.$isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: translateX(-20px);
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

const Menu = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background: linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    padding: 80px 20px 20px;
    gap: 0.5rem;
    align-items: stretch;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 1001;
  }
`

const MenuItem = styled(Link)`
  position: relative;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease;

  /* subrayado animado */
  &::after {
    content: '';
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 2px;
    height: 2px;
    background: linear-gradient(90deg, rgba(79, 172, 254, 0), rgba(79, 172, 254, 0.8), rgba(79, 172, 254, 0));
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 220ms ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(100, 200, 255, 0.05));
    color: #0d47a1;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
    
    &:hover {
      transform: translateX(5px);
    }

    &::after {
      display: none;
    }
  }
`;
