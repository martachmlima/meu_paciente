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
  width: 240px;
  height: 50px;
  margin: 10px 0 5px 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`
export const HistoricSelector = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  font-size: 20px;
  p {
    display: inline-block;
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
