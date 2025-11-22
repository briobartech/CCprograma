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
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: var(--card-height, 16rem);
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
  background: #000;
  &:hover ${IconsWrapper},
  &:focus ${IconsWrapper} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
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
`;

const Title = styled.h2`
  color: #fff;
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  margin: 0;
  font-weight: 700;
  text-shadow: 0 6px 20px rgba(0,0,0,0.6);
`;
