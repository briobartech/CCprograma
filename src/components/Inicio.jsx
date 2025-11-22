import styled from 'styled-components'
import TextOverlayImageCard from './TextOverlayImageCard'

function Inicio () {
  return (
    <InicioStyled>
      <div className='wlc-title'>
        <TextOverlayImageCard />
      </div>
    </InicioStyled>
  )
}
export default Inicio

const InicioStyled = styled.div`
  .wlc-title {
    width: 100%;
    position: absolute;
    padding-top:120px;
    top: 0;
  }

  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
