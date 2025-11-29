import styled from 'styled-components'
import ig from '/icons/1x/ig.png'
import fb from '/icons/1x/fb.png'
import xtw from '/icons/1x/x.png'
import yt from '/icons/1x/yt.png'
import ws from '/icons/1x/ws.png'

// Configuración de redes sociales - solo muestra las que tienen URL
const socialMedia = {
  instagram: 'https://instagram.com/camaracomerciotupungato',
  facebook: 'https://facebook.com/camaracomerciotupungato',
  twitter: '', // vacío = no se muestra
  youtube: 'https://youtube.com/@camaracomerciotupungato',
  whatsapp: '' // vacío = no se muestra
}

const socialIcons = {
  instagram: { icon: ig, label: 'Instagram' },
  facebook: { icon: fb, label: 'Facebook' },
  twitter: { icon: xtw, label: 'Twitter/X' },
  youtube: { icon: yt, label: 'YouTube' },
  whatsapp: { icon: ws, label: 'WhatsApp' }
}

function Contact() {
  // Filtrar solo las redes sociales con URL configurada
  const activeSocials = Object.entries(socialMedia).filter(([key, url]) => url)

  return (
    <ContactStyled>
      <CardWrapper>
        <Card>
          <CardContent>
            <Title>Contactanos</Title>
            <List>
              <Item>
                <Label>Email:</Label>
                <Value>info@camaracomercio.tupungato.gov.ar</Value>
              </Item>
              <Item>
                <Label>Teléfono:</Label>
                <Value>+54 261 000 0000</Value>
              </Item>
              <Item>
                <Label>WhatsApp:</Label>
                <Value>+54 9 261 000 0000</Value>
              </Item>
              <Item>
                <Label>Dirección:</Label>
                <Value>Av. Principal 123, Tupungato, Mendoza</Value>
              </Item>
              <Actions>
                <ActionLink href="mailto:info@camaracomercio.tupungato.gov.ar">Enviar Email</ActionLink>
                <ActionLink href="tel:+542610000000">Llamar</ActionLink>
                <ActionLink href="https://wa.me/5492610000000" target="_blank" rel="noopener noreferrer">WhatsApp</ActionLink>
              </Actions>
            </List>
          </CardContent>
        </Card>

        {activeSocials.length > 0 && (
          <SocialsWrapper>
            {activeSocials.map(([key, url]) => (
              <a 
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialIcons[key].label}
              >
                <img src={socialIcons[key].icon} alt={socialIcons[key].label} style={{ width: '32px', height: '32px' }} />
              </a>
            ))}
          </SocialsWrapper>
        )}
      </CardWrapper>
    </ContactStyled>
  )
}

export default Contact

const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
`

const Card = styled.div`
  position: relative;
  width: min(1200px, 95%);
  background: #fff;
  color: #111;
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.25);
  padding: 3rem;
`

const CardContent = styled.div`
`

const SocialsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  opacity: 0;
  transition: opacity 250ms ease, transform 250ms ease;
  pointer-events: none;

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.02em;
`

const List = styled.div`
  display: grid;
  gap: 0.75rem 1rem;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: center;
  gap: 0.5rem;
`

const Label = styled.span`
  color: #444;
  font-weight: 600;
`

const Value = styled.span`
  color: #111;
`

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`

const ActionLink = styled.a`
  background: #51a76fff; /* pastel green */
  color: #064420; /* deep green text for contrast */
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  border-radius: 10px;
  font-weight: 600;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, color 160ms ease;
  box-shadow: 0 6px 18px rgba(6, 68, 32, 0.18);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(6, 68, 32, 0.28);
    background: #95d5b2; /* slightly darker pastel on hover */
    color: #033019;
  }
`
