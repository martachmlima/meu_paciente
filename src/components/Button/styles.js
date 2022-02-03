import styled, { css } from 'styled-components'

export const Container = styled.button`
  font-family: 'Roboto', sans-serif;
  background: #8fb7e3;
  color: #f8f7f7;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  ${props =>
    props.bolder &&
    css`
      font-size: 24px;
      font-weight: bold;
    `}
  &:hover {
    background: #0968c0;
  }
`
