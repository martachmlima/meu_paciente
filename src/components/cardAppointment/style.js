import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 190px;
  background-color: #9dc9ee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 10px 5px 5px #666665;
  color: white;
  font-weight: 500;
  font-size: 20px;
  transition: 0.5s;
  p {
    margin-left: 5px;
    margin-bottom: 5px 0px 8px 0px;
    font-size: 19px;
  }
  @media screen and (min-width: 370px) {
    margin-left: 0;
  }
  @media screen and (min-width: 600px) {
    margin-left: 5px;
  }
  @media screen and (min-width: 700px) {
    margin-left: 35px;
  }
  @media screen and (min-width: 750px) {
    margin-left: 35px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1023px) {
    margin-left: 25px;
    margin-right: 0;
  }
  @media screen and (min-width: 1400px) {
    margin-left: 20px;
    margin-right: 30px;
  }
  @media screen and (min-width: 1900px) {
    margin-left: 10px;
    margin-right: 5px;
  }
`
export const Paragraphs = styled.div`
  padding-left: 5px;
  > p {
    margin-left: 5px;
    padding-bottom: 5px;
  }
`

export const CardHeader = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  > p {
    margin-right: 70px;
    cursor: default;
  }
  > svg {
    cursor: pointer;
    margin-right: 10px;
    color: tomato;
  }
`

export const CompletedCheck = styled.div`
  cursor: pointer;
  position: absolute;
  left: 280px;
  top: -18px;
  background-color: #8fb7e3;
  border-radius: 50%;
  &:hover {
    color: green;
  }
`
export const Divider = styled.p`
  height: 2px;
  background-color: #fff;
`
