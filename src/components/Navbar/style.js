import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #251f47;
  width: 100%;

  box-shadow: 0px 1px #404e7c;
  margin-bottom: 10px;
`;

export const NavButton = styled.button`
  float: right;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 2.5px;

  transition: 0.3s;

  :hover {
    color: #a6a6a6;
  }
`;

export const Text = styled.span`
  color: white;
  font-size: 20px;
`;
