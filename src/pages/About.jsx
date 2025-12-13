import styled from 'styled-components'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'

function About () {
  const palette = useContext(AppContext).palette

  return (
    <AboutStyled $palette={palette}>
      <Container>
        <Section>
          <Title>Sobre Nosotros</Title>
        </Section>

        <Section>
          <SectionTitle>Nuestra Historia</SectionTitle>
          <Text>
            Fundada en 1958, la Cámara de Agricultura, Comercio, Industria y Turismo de Tupungato 
            nació con el propósito de acompañar el crecimiento productivo del departamento. A lo largo 
            de más de seis décadas, hemos sido un actor clave en la representación del sector empresarial, 
            promoviendo iniciativas que impulsan el desarrollo local y fortalecen la economía regional.
          </Text>
          <Text>
            Durante nuestra trayectoria, hemos trabajado junto a emprendedores, comerciantes, productores 
            y empresas, articulando esfuerzos con organismos públicos y privados para mejorar la competitividad, 
            facilitar el acceso a capacitaciones y promover eventos que aportan valor a la comunidad.
          </Text>
          <Text>
            Hoy, la Cámara continúa renovándose y expandiendo su alcance, manteniendo firme el compromiso 
            de apoyar el progreso económico y social de Tupungato y del Valle de Uco.
          </Text>
        </Section>

        <GridSection>
          <Card $palette={palette}>
            <CardTitle>Misión</CardTitle>
            <CardText>
              Representar, fortalecer y promover el desarrollo de los sectores de agricultura, comercio, 
              industria y turismo de Tupungato y el Valle de Uco, brindando servicios de capacitación, 
              asesoramiento y representación institucional que mejoren la competitividad de nuestros socios 
              y contribuyan al crecimiento económico y social de la región.
            </CardText>
          </Card>

          <Card $palette={palette}>
            <CardTitle>Visión</CardTitle>
            <CardText>
              Ser la institución de referencia en el Valle de Uco para el desarrollo empresarial y productivo, 
              reconocida por su cercanía con la comunidad, su compromiso con la formación continua y su 
              capacidad de articular alianzas estratégicas que generen oportunidades de crecimiento para 
              todos los sectores económicos.
            </CardText>
          </Card>
        </GridSection>

        <Section>
          <SectionTitle>Valores</SectionTitle>
          <ValuesList>
            <ValueItem>
              <ValueTitle>Compromiso</ValueTitle>
              <ValueText>Con el desarrollo económico y social de nuestra comunidad</ValueText>
            </ValueItem>
            <ValueItem>
              <ValueTitle>Cercanía</ValueTitle>
              <ValueText>Atención directa y personalizada a nuestros socios</ValueText>
            </ValueItem>
            <ValueItem>
              <ValueTitle>Profesionalismo</ValueTitle>
              <ValueText>Brindamos servicios de calidad con seriedad y confianza</ValueText>
            </ValueItem>
            <ValueItem>
              <ValueTitle>Innovación</ValueTitle>
              <ValueText>Nos renovamos constantemente para adaptarnos a los nuevos desafíos</ValueText>
            </ValueItem>
            <ValueItem>
              <ValueTitle>Colaboración</ValueTitle>
              <ValueText>Construimos alianzas estratégicas para multiplicar el impacto</ValueText>
            </ValueItem>
            <ValueItem>
              <ValueTitle>Transparencia</ValueTitle>
              <ValueText>Actuamos con integridad en todas nuestras gestiones</ValueText>
            </ValueItem>
          </ValuesList>
        </Section>

        <Section>
          <SectionTitle>¿A Quién Servimos?</SectionTitle>
          <Text>Nuestra Cámara está al servicio de:</Text>
          <List>
            <ListItem>Comercios y empresas de Tupungato y el Valle de Uco</ListItem>
            <ListItem>Emprendedores que buscan fortalecer su actividad</ListItem>
            <ListItem>Productores agrícolas e industriales</ListItem>
            <ListItem>Profesionales del sector turístico</ListItem>
            <ListItem>Toda la comunidad interesada en el desarrollo regional</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Lo Que Nos Diferencia</SectionTitle>
          <DifferentiatorsList>
            <DifferentiatorItem>Más de 65 años de experiencia acompañando el crecimiento de la región</DifferentiatorItem>
            <DifferentiatorItem>Auditorio propio que nos permite organizar una amplia variedad de eventos</DifferentiatorItem>
            <DifferentiatorItem>Atención personalizada y cercana a cada socio</DifferentiatorItem>
            <DifferentiatorItem>Alianzas estratégicas con instituciones educativas y organismos gubernamentales</DifferentiatorItem>
            <DifferentiatorItem>Capacitaciones actualizadas y de calidad</DifferentiatorItem>
            <DifferentiatorItem>Compromiso constante con la mejora continua</DifferentiatorItem>
            <DifferentiatorItem>Representación activa ante organismos públicos y privados</DifferentiatorItem>
          </DifferentiatorsList>
        </Section>
      </Container>
    </AboutStyled>
  )
}

export default About

const AboutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 0.5rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 375px) {
    gap: 0.75rem;
  }
`

const Section = styled.section`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 375px) {
    padding: 1rem 0.75rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #333;
  margin: 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }

  @media (max-width: 480px) {
    font-size: 1.65rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #333;
  margin: 0 0 1.5rem 0;
  font-weight: 700;
  border-bottom: 3px solid #51a76fff;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    border-bottom-width: 2px;
    padding-bottom: 0.4rem;
  }

  @media (max-width: 375px) {
    font-size: 1.15rem;
  }
`

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin: 0 0 1rem 0;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.925rem;
    line-height: 1.65;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const Card = styled.div`
  background: ${props => props.$palette?.accent || '#3b8f73'};
  color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.25rem;
    border-radius: 8px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 375px) {
    padding: 1.25rem 1rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const ValueItem = styled.div`
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #51a76fff;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-left-width: 3px;

    &:hover {
      transform: translateX(3px);
    }
  }

  @media (max-width: 375px) {
    padding: 0.85rem;
  }
`

const ValueTitle = styled.h4`
  font-size: 1.15rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`

const ValueText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`

const ListItem = styled.li`
  font-size: 1.05rem;
  color: #444;
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #51a76fff;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.6rem 0;
    padding-left: 1.25rem;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`

const DifferentiatorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const DifferentiatorItem = styled.div`
  font-size: 1.05rem;
  color: #444;
  padding: 0.85rem 1rem 0.85rem 2.5rem;
  background: #f0f7f4;
  border-radius: 8px;
  position: relative;
  line-height: 1.6;
  transition: all 0.3s ease;

  &::before {
    content: "✓";
    position: absolute;
    left: 1rem;
    color: #51a76fff;
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:hover {
    background: #e1f0ea;
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.85rem 0.75rem 2.25rem;

    &::before {
      left: 0.85rem;
      font-size: 1.1rem;
    }

    &:hover {
      transform: translateX(3px);
    }
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding: 0.65rem 0.75rem 0.65rem 2rem;

    &::before {
      left: 0.75rem;
    }
  }
`
