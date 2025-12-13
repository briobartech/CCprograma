import styled from 'styled-components'

/**
 * BannerCard - Plantilla con banner en el tercio superior y área de contenido blanca
 * Props:
 *  - bannerImage: URL de la imagen para el banner
 *  - children: Contenido que va en el área blanca
 *  - height: Altura total del card (default: 500px)
 */
function BannerCard({ bannerImage = '/banner-premium.avif', children, height = '720px' }) {
  return (
    <Card style={{ ['--card-height']: height }}>
      <BannerSection $bannerImage={bannerImage} />
      <ContentSection>
        {children}
      </ContentSection>
    </Card>
  )
}

export default BannerCard

const Card = styled.div`
  width: 100%;
  max-width: 720px;
  height: var(--card-height, 500px);
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 0;
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    min-height: 500px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
    min-height: 400px;
  }
`

const BannerSection = styled.div`
  flex: 0 0 33.333%; /* 1/3 del alto total */
  background-image: url(${props => props.$bannerImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`

const ContentSection = styled.div`
  flex: 1; /* Ocupa el resto del espacio (2/3) */
  background: #fff;
  padding: 2rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`
