import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
function NavBar () {
  return (
    <Nav>
      <LogoLink to='/'>
        <Logo src='/logo-color-fondo-transparente.png' alt='Logo CC' />
      </LogoLink>

      {useContext(AppContext).currentSection !== 'home' ? (
        <Menu>
          <MenuItem to='/'>Home</MenuItem>
          <MenuItem to='/about'>About</MenuItem>
          <MenuItem to='/services'>Services</MenuItem>
          <MenuItem to='/contact'>Contact</MenuItem>
        </Menu>
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
`

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
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

const Menu = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
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
`;
