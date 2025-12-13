import styled from 'styled-components';
import { useState } from 'react';
import NewsTicker from '../components/NewsTicker';
import BlogPostModal from '../components/BlogPostModal';
import { palette1 } from '../utils/colors';

function Content() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closePost = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  // Datos de ejemplo para el blog
  const blogPosts = [
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
    },
    {
      id: 4,
      title: 'Beneficios Fiscales para Asociados',
      excerpt: 'Descubre los incentivos fiscales disponibles para miembros activos de la Cámara de Comercio.',
      date: '1 Diciembre 2025',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      category: 'Beneficios'
    }
  ];

  return (
    <ContentStyled>
      <NewsTicker />
      
      <BlogSection>
        <SectionTitle>Últimas Noticias y Eventos</SectionTitle>
        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id} onClick={() => openPost(post)}>
              <BlogImageWrapper>
                <BlogImage src={post.image} alt={post.title} onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250?text=Imagen+No+Disponible';
                }} />
                <CategoryBadge>{post.category}</CategoryBadge>
              </BlogImageWrapper>
              <BlogContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink>Leer más →</ReadMoreLink>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogSection>

      <BlogPostModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={closePost} 
      />
    </ContentStyled>
  );
}

export default Content;

const ContentStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${palette1.background};
`;

const BlogSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
  
  @media (max-width: 375px) {
    padding: 1.25rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${palette1.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const BlogImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 220px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${palette1.primary};
  color: ${palette1.background};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.35rem 0.7rem;
    font-size: 0.7rem;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const BlogDate = styled.time`
  display: block;
  color: ${palette1.accent};
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const BlogExcerpt = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }
`;

const ReadMoreLink = styled.span`
  color: ${palette1.primary};
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  ${BlogCard}:hover & {
    color: ${palette1.secondary};
  }
`;
