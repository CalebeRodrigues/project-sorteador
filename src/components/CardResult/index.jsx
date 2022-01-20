import styled from 'styled-components';

export const CardResultArea = styled.div`
  margin-top: 20px;
  padding: 5px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #e2e1e1;
  border-radius: 10px;

  @media screen and (max-width: 769px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 426px) {
    grid-template-columns: auto auto;
  }
`;

export const CardResultAreaItem = styled.div`
  margin: 10px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid gray;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;

  :hover {
    background-color: #d6d6d6ab;
    border: 1px solid black;
  }
`;
