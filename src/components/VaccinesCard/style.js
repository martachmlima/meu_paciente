import styled from 'styled-components'

export const Card = styled.div`
  width: 300px
  height: 150px
  border: 2px solid gray
  border-radius: 5px
  display: flex
  flex-direction: column
  justify-content: space-around
  margin-left: 10px
  > p {
    margin-left: 5px
    margin-bottom: 5px 0px 8px 0px
  }
  > div {
    padding: 5px
  }
`

export const CardHeader = styled.div`
  width: 100%
  height: fit-content
  border-bottom: 2px solid gray
  display: flex
  justify-content: space-between
  align-items: center
  > svg {
    cursor: pointer;
  }
`
