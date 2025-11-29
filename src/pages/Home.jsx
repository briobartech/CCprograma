import styled from 'styled-components'
import TextOverlayImageCard from '../components/TextOverlayImageCard.jsx'

function Home () {
  return (
    <HomeStyled>
      <div className='wlc-title'>
        <TextOverlayImageCard />
      </div>
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

  .wlc-title {
  position: relative;
  top:0;
    width: 100%;
    
  }
`
