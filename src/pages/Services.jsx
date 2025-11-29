import styled from 'styled-components'

function Services() {
  return (
    <ServicesStyled>
      <h1>Nuestros Servicios</h1>
      <p>Descubre todos los servicios que ofrecemos</p>
    </ServicesStyled>
  )
}

export default Services

const ServicesStyled = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  text-align: center;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 600px;
  }
`
