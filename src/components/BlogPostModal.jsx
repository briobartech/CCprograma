import styled from 'styled-components';
import { palette1 } from '../utils/colors';

function BlogPostModal({ post, isOpen, onClose }) {
  if (!isOpen || !post) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalImage src={post.image} alt={post.title} />
        
        <ModalBody>
          <CategoryBadge>{post.category}</CategoryBadge>
          <PostDate>{post.date}</PostDate>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>
            <p>{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>Detalles Importantes</h3>
            <ul>
              <li>Beneficio para todos los asociados activos</li>
              <li>Inscripción disponible en línea</li>
              <li>Cupos limitados - registrarse pronto</li>
              <li>Certificado de participación incluido</li>
            </ul>
            <p>
              Para más información, contacta con nuestra oficina o visita nuestras redes sociales 
              donde publicamos actualizaciones constantes sobre este y otros eventos.
            </p>
          </PostContent>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

export default BlogPostModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0 16px 16px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${palette1.accent};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${palette1.darkText};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;
  z-index: 10;
  color: #333;

  &:hover {
    transform: rotate(90deg) scale(1.1);
    background: ${palette1.primary};
    color: white;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: ${palette1.primary};
  color: ${palette1.background};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const PostDate = styled.time`
  display: block;
  color: ${palette1.accent};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const PostTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
`;

const PostContent = styled.div`
  color: #444;
  font-size: 1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.3rem;
    color: ${palette1.primary};
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  ul {
    margin: 1rem 0 1.5rem 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: #555;
      
      &::marker {
        color: ${palette1.accent};
      }
    }
  }
`;
