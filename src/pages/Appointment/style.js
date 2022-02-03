import styled from 'styled-components'

export const CardBox = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;
  margin: 20px auto;
`
export const Title = styled.div`
  font-size: xxx-large;
  text-align: center;
`
export const ButtonAppointment = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    margin: 0 auto;
    width: 240px;
    margin: 10px auto;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
  @media screen and (min-width: 374px) {
  }
`
export const HistoricSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 5px auto;
  font-size: 20px;
  p {
    cursor: pointer;
    width: 90px;
  }
  @media screen and (min-width: 374px) {
    width: 50%;
  }
  @media screen and (min-width: 1023px) {
    width: 50%;
  }
`
