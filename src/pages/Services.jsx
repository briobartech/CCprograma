import styled from 'styled-components'
import BannerCard from '../components/BannerCard.jsx'

function Services () {
  return (
    <ServicesStyled>
      <BannerCard>
        <Title>Beneficios para Socios</Title>
        <BenefitsList>
          <BenefitItem>
            <BenefitIcon>🏛️</BenefitIcon>
            <BenefitContent>
              <BenefitTitle>Representación Institucional</BenefitTitle>
              <BenefitDescription>
                Actuamos como voceros de sus intereses ante organismos públicos, 
                defendiendo y promoviendo el desarrollo del sector empresarial en 
                todos los niveles gubernamentales.
              </BenefitDescription>
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitIcon>🎫</BenefitIcon>
            <BenefitContent>
              <BenefitTitle>Prioridad y Descuentos</BenefitTitle>
              <BenefitDescription>
                Acceso preferencial y tarifas especiales en eventos, conferencias, 
                seminarios y capacitaciones organizadas por la Cámara, con descuentos 
                exclusivos para asociados.
              </BenefitDescription>
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitIcon>📚</BenefitIcon>
            <BenefitContent>
              <BenefitTitle>Capacitaciones Exclusivas</BenefitTitle>
              <BenefitDescription>
                Programas de formación personalizados según el sector de su empresa, 
                diseñados para potenciar las habilidades específicas de su equipo y 
                mantenerlo actualizado en las últimas tendencias del mercado.
              </BenefitDescription>
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitIcon>📢</BenefitIcon>
            <BenefitContent>
              <BenefitTitle>Promoción Empresarial</BenefitTitle>
              <BenefitDescription>
                Visibilidad garantizada para su negocio a través de nuestras redes 
                sociales, sitio web y medios de comunicación oficiales, ampliando su 
                alcance y fortaleciendo su presencia en el mercado local.
              </BenefitDescription>
            </BenefitContent>
          </BenefitItem>
        </BenefitsList>
      </BannerCard>
    </ServicesStyled>
  )
}

export default Services

const ServicesStyled = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
  
  @media (max-width: 375px) {
    padding: 0.25rem;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 600px;
  }
`

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    margin-bottom: 1rem;
  }
`

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const BenefitItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem;
    gap: 0.875rem;
    
    &:hover {
      transform: translateX(3px);
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem 0.75rem;
    gap: 0.75rem;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  @media (max-width: 375px) {
    padding: 0.875rem 0.5rem;
  }
`

const BenefitIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 375px) {
    font-size: 2.25rem;
  }
`

const BenefitContent = styled.div`
  flex: 1;
`

const BenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 375px) {
    font-size: 0.95rem;
  }
`

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`
