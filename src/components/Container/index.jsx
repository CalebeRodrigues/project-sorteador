import styled from 'styled-components';

export const Container = styled.div`
  word-wrap: break-word;
  padding: 2px;
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  background-color: #f1f1f1;

  @media screen and (max-width: 426px) {
    margin-left: 3%;
    margin-right: 3%;
  }
`;
