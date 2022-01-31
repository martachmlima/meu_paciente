import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 135px;
  background-color: #9dc9ee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  p {
    margin-left: 5px;
    margin-bottom: 5px 0px 8px 0px;
    font-size: 19px;
  }
`
export const ContentBody = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`

export const CardHeader = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  > svg {
    cursor: pointer;
  }
`
