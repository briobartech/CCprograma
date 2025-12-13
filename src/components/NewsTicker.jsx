import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { palette1 } from '../utils/colors';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  background: linear-gradient(135deg, ${palette1.accent} 0%, ${palette1.darkText} 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  @media (max-width: 768px) {
    height: 45px;
    max-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
  
  @media (max-width: 375px) {
    height: 35px;
  }
`;

const TickerLabel = styled.div`
  background-color: ${palette1.primary};
  color: ${palette1.background};
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    font-size: 11px;
  }
`;

const TickerWrapper = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TickerContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  animation: ${scrollLeft} 60s linear infinite;
  animation-play-state: ${props => props.$paused ? 'paused' : 'running'};

  &:hover .news-text {
    color: ${palette1.text};
  }

  @media (max-width: 768px) {
    animation: none;
    min-width: max-content;
  }
`;

const NewsItem = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 30px;
  color: ${palette1.background};
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0 15px;
  }
`;

const NewsBullet = styled.span`
  color: ${palette1.primary};
  margin-right: 10px;
  font-size: 12px;
`;

const NewsText = styled.span`
  transition: color 0.3s ease;
`;

const NewsTicker = ({ news = [] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef(null);

  // Noticias por defecto si no se pasan
  const defaultNews = [
    { id: 1, text: "Nueva normativa empresarial entrará en vigor el próximo mes" },
    { id: 2, text: "Jornada de capacitación gratuita para emprendedores" },
    { id: 3, text: "Cámara de Comercio anuncia nuevos beneficios para afiliados" },
    { id: 4, text: "Actualización: Requisitos para renovación de registro mercantil" },
    { id: 5, text: "Próximo evento networking empresarial - Inscripciones abiertas" }
  ];

  const newsItems = news.length > 0 ? news : defaultNews;

  return (
    <TickerContainer>
      <TickerLabel>
        <span>Noticias</span>
      </TickerLabel>
      <TickerWrapper
        ref={tickerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <TickerContent $paused={isPaused}>
          {/* Duplicamos el contenido para efecto continuo */}
          {[...newsItems, ...newsItems].map((item, index) => (
            <NewsItem key={`${item.id}-${index}`}>
              <NewsBullet>●</NewsBullet>
              <NewsText className="news-text">{item.text}</NewsText>
            </NewsItem>
          ))}
        </TickerContent>
      </TickerWrapper>
    </TickerContainer>
  );
};

export default NewsTicker;
