import IconCard from './IconCard'
import styled from 'styled-components'

const BASE_URL = import.meta.env.BASE_URL

function IconsWidget () {
  return (
    <IconsWidgetStyled>
      <IconCard icon={`${BASE_URL}icons/new.svg`} label='Nuevo' />
      <IconCard icon={`${BASE_URL}icons/newspaper-news.svg`} label='Informate' />
      <IconCard icon={`${BASE_URL}icons/content-marketing.svg`} label='Contenido' to='/content'/>
      <IconCard icon={`${BASE_URL}icons/contact.svg`} label='Contactános' to='/contact' />
      <IconCard icon={`${BASE_URL}icons/about-dot-me.svg`} label='Sobre nosotros' to='/about' />
      <IconCard icon={`${BASE_URL}icons/premium.svg`} label='Suscríbete' to='/services' />
    </IconsWidgetStyled>
  )
}

export default IconsWidget

const IconsWidgetStyled = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`
