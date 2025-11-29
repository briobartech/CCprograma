import styled from 'styled-components'
import { Link } from 'react-router-dom'

function IconCard ({ icon, label = '', to }) {
  return (
    <IconCardStyled tabIndex={0} to={to || '#'}>
      <Icon src={icon} alt={label || 'icon'} />
      <Label>{label}</Label>
    </IconCardStyled>
  )
}

export default IconCard

const IconCardStyled = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease,
    opacity 0.5s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
    background: rgba(255, 255, 255, 0.2);
  }
`

const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;
  filter: invert(1) brightness(1.2); /* si quieres el icono en blanco sobre fondo oscuro */
`

const Label = styled.span`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 160ms ease, transform 160ms ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  z-index: 40;
  ${IconCardStyled}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`
