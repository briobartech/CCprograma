import IconCard from './IconCard'
import premium from '/CCprograma/icons/premium.svg'
import newItem from '/CCprograma/icons/new.svg'
import content from '/CCprograma/icons/content-marketing.svg'
import newspaper from '/CCprograma/icons/newspaper-news.svg'
import aboutUs from '/CCprograma/icons/about-dot-me.svg'
import contact from '/CCprograma/icons/contact.svg'
import styled from 'styled-components'

function IconsWidget () {
  return (
    <IconsWidgetStyled>
      <IconCard icon={newItem} label='Nuevo' />
      <IconCard icon={newspaper} label='Informate' />
      <IconCard icon={content} label='Contenido' to='/content'/>
      <IconCard icon={contact} label='Contactános' to='/contact' />
      <IconCard icon={aboutUs} label='Sobre nosotros' to='/about' />
      <IconCard icon={premium} label='Suscríbete' to='/services' />
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
