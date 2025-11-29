import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
function NavBar () {
  return (
    <Nav>
      <LogoLink to='/'>
        <Logo src='/logo-cc.png' alt='Logo CC' />
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
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
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
  color: #fff;
  text-decoration: none;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease;

  /* subrayado animado */
  &::after {
    content: '';
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 4px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.7), rgba(255,255,255,0.0));
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 220ms ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.10);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
