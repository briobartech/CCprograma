import IconCard from './IconCard'
import premium from '/icons/premium.svg'
import newItem from '/icons/new.svg'
import content from '/icons/content-marketing.svg'
import newspaper from '/icons/newspaper-news.svg'
import aboutUs from '/icons/about-dot-me.svg'


import styled from 'styled-components'

function IconsWidget () {
  return (
    <IconsWidgetStyled>
      <IconCard icon={premium} label='Premium' />
      <IconCard icon={newItem} label='Nuevo' />
      <IconCard icon={newspaper} label='Noticias' />
      <IconCard icon={content} label='Contenido' />

      <IconCard icon={aboutUs} label='Sobre nosotros' />
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
