import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #251f47;
  border: 1px solid green;
  margin-top: 20px;
  height: 120px;
`;

export const FooterBar = styled.div`
  color: white;

  padding-top: 20px;
  font-size: 18px;

  width: 100%;
  text-align: center;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;

  transition: 0.2s;

  :hover {
    color: #8a8a8a;
  }
`;
