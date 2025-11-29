import styled from 'styled-components'
import NavBar from '../components/NavBar.jsx'
function About () {
  return (
    <AboutStyled>
      <h1>Sobre Nosotros</h1>
      <p>Bienvenido a la Cámara de Comercio de Tupungato</p>
    </AboutStyled>
  )
}

export default About

const AboutStyled = styled.div`

  width: 100%;
 /*  height: 100%; */
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
