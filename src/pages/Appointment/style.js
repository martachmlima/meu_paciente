import styled from 'styled-components'

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 370px) {
    justify-content: center;
  }
  @media screen and (min-width: 700px) {
    justify-content: flex-start;
  }
`

export const Title = styled.div`
  font-size: xxx-large;
  text-align: center;
`
export const ButtonAppointment = styled.div`
  width: 240px;
  height: 50px;
  margin: 10px auto 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  @media screen and (min-width: 700px) {
    margin: 10px 0 5px 10px;
  }
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
    width: 65%;
  }
  @media screen and (min-width: 1023px) {
    width: 43%;
  }
`
export const Paragraph = styled.p`
  display: inline-block;
  cursor: pointer;
  width: 90px;
  color: ${props => props.focus && '#f37435'};
`
