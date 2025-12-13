import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextOverlayImageCard from '../components/TextOverlayImageCard.jsx'
import NewsTicker from '../components/NewsTicker.jsx'
import { palette1 } from '../utils/colors'

function Home () {
  const navigate = useNavigate()
  
  // Las 3 noticias más recientes (compartidas con Content)
  const recentNews = [
    {
      id: 1,
      title: 'Nuevas Regulaciones Comerciales 2025',
      excerpt: 'Conoce las últimas actualizaciones en materia de comercio y cómo afectan a tu negocio.',
      date: '10 Diciembre 2025',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'Normativas'
    },
    {
      id: 2,
      title: 'Evento de Networking Empresarial',
      excerpt: 'Únete a nuestro próximo encuentro de empresarios y amplía tu red de contactos profesionales.',
      date: '8 Diciembre 2025',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
      category: 'Eventos'
    },
    {
      id: 3,
      title: 'Curso: Marketing Digital para Pymes',
      excerpt: 'Aprende estrategias efectivas de marketing digital adaptadas a pequeñas y medianas empresas.',
      date: '5 Diciembre 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Capacitación'
    }
  ]

  return (
    <HomeStyled>
      <div className='wlc-title'>
        <NewsTicker></NewsTicker>
        <TextOverlayImageCard height='18rem' />
      </div>
      
      <NewsSection>
        <SectionTitle>Últimas Noticias</SectionTitle>
        <NewsGrid>
          {recentNews.map(news => (
            <NewsCard key={news.id} onClick={() => navigate('/content')}>
              <NewsImage src={news.image} alt={news.title} />
              <NewsContent>
                <CategoryBadge>{news.category}</CategoryBadge>
                <NewsDate>{news.date}</NewsDate>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
        <ViewAllButton onClick={() => navigate('/content')}>
          Ver todas las noticias →
        </ViewAllButton>
      </NewsSection>
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
  
  @media (max-width: 480px) {
    padding: 0;
  }
  
  @media (max-width: 375px) {
    padding: 0;
  }

  .wlc-title {
    position: relative;
    top: 0;
    width: 100%;
  }
`

const NewsSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${palette1.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`

const NewsCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`

const NewsImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`

const NewsContent = styled.div`
  padding: 1.25rem;
`

const CategoryBadge = styled.span`
  display: inline-block;
  background: ${palette1.primary};
  color: ${palette1.background};
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`

const NewsDate = styled.time`
  display: block;
  color: ${palette1.accent};
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
`

const NewsTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const NewsExcerpt = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ViewAllButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, ${palette1.accent} 0%, ${palette1.darkText} 100%);
  color: ${palette1.background};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`
