import React from 'react'
import styled from 'styled-components'
import IconsWidget from './IconsWidget'

/**
 * TextOverlayImageCard
 * Props:
 *  - src: image URL
 *  - alt: image alt text
 *  - text: overlay text
 *  - height: CSS height (px, rem, etc.)
 */
const TextOverlayImageCard = ({
  src = '/banner.jpeg',
  alt = 'Imagen',
  text = 'CÁMARA DE COMERCIO: TUPUNGATO',
  height = '26rem',
}) => {
  return (
    <Card style={{ ['--card-height']: height }} tabIndex={0}>
      <Img src={src} alt={alt} />
      <DarkOverlay />
      <Center>
        <Title>{text}</Title>
      </Center>
      <IconsWrapper>
        <IconsWidget />
      </IconsWrapper>
    </Card>
  )
}

export default TextOverlayImageCard

/* Icons wrapper: initially hidden, appears when Card is hovered or focused */
const IconsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%) translateY(8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease, transform 200ms ease;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    transform: translateX(-50%) scale(0.85);
    opacity: 1;
    pointer-events: auto;
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    transform: translateX(-50%) scale(0.75);
    opacity: 1;
    pointer-events: auto;
  }
  
  @media (max-width: 375px) {
    bottom: 0.75rem;
    transform: translateX(-50%) scale(0.65);
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: var(--card-height, clamp(16rem, 26rem, 30rem));
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
  background: #000;
  
  @media (max-width: 1024px) {
    height: var(--card-height, clamp(18rem, 22rem, 26rem));
  }
  
  @media (max-width: 768px) {
    height: var(--card-height, 16rem);
    border-radius: 0;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    height: var(--card-height, 14rem);
    border-radius: 0;
    max-width: 100%;
  }
  
  @media (max-width: 375px) {
    height: var(--card-height, 12rem);
  }
  
  &:hover ${IconsWrapper},
  &:focus ${IconsWrapper} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    /* En móviles, aseguramos que hover no afecte los iconos ya visibles */
    &:hover ${IconsWrapper},
    &:focus ${IconsWrapper} {
      transform: translateX(-50%) scale(0.85);
    }
  }
  
  @media (max-width: 480px) {
    &:hover ${IconsWrapper},
    &:focus ${IconsWrapper} {
      transform: translateX(-50%) scale(0.75);
    }
  }
  
  @media (max-width: 375px) {
    &:hover ${IconsWrapper},
    &:focus ${IconsWrapper} {
      transform: translateX(-50%) scale(0.65);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.32));
  transition: background 200ms ease;
  
  /* intensificar overlay en hover/focus para mejorar legibilidad del texto */
  ${Card}:hover &,
  ${Card}:focus & {
    background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.6));
  }
  
  /* En móviles, overlay más oscuro por defecto para mejor legibilidad */
  @media (max-width: 768px) {
    background: linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }
`;

const Center = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 220ms ease, transform 220ms ease;
  
  /* mostrar el texto al hacer hover o cuando la tarjeta tiene focus (accesible por teclado) */
  ${Card}:hover &,
  ${Card}:focus & {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* En móviles, mostrar el título siempre */
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  margin: 0;
  font-weight: 700;
  text-shadow: 0 6px 20px rgba(0,0,0,0.6);
  
  @media (max-width: 480px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    line-height: 1.3;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 375px) {
    font-size: clamp(0.9rem, 5vw, 1.25rem);
  }
`;
