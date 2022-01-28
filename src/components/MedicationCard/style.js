import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #9dc9ee;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Paragraphs = styled.div`
  padding-left: 5px;
  > p {
    margin-left: 5px;
    padding-bottom: 5px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  padding: 7px;
  > p {
    margin-right: 70px;
  }
  > svg {
    cursor: pointer;
    margin-right: 10px;
  }
`;
