import styled from 'styled-components'
import Landing1 from '../../assets/images/Landing1.png'
import Landing2 from '../../assets/images/Landing2.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: auto;
  border-radius: 5px;
`

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
export const CarouselContainer = styled.div`
  background-image: url(${Landing1});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
    background-size: contain;
    width: 600px;
  }
`
export const LandingContainer = styled.div`
  background-image: url(${Landing2});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .buttons {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  Button {
    margin: 5px;
    width: 100px;
    height: 50px;
    :hover {
      background-color: #0968c0;
    }
  }
  .second {
    color: #8fb7e3;
    border: #8fb7e3 solid 1px;
    background: #f8f7f7;
    :hover {
      background-color: #8fb7e3;
      color: #f8f7f7;
    }
  }
  h1 {
    margin-top: 20px;
    margin: 5px;
    margin-bottom: 20px;
    text-align: center;
  }
`
