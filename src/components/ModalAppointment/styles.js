import styled from 'styled-components'

export const ComponentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 10px 0 0;
  background: transparent;

  label {
    color: ${props => (!!props.err ? 'red' : '#777')};
  }

  input {
    width: 100%;
    padding: 0px 5px;
    border-radius: 8px;
    border: 1px solid #777;
    border-color: #777;
    min-height: 50px;
    background: transparent;
  }
`
