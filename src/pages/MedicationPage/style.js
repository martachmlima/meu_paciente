import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
