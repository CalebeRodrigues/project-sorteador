import styled from 'styled-components';

import instagram from '../../assets/img/instagram.png';

export const FooterContainer = styled.div`
  background-color: #251f47;
  min-height: 120px;
`;

export const FooterBar = styled.div`
  color: white;

  padding-top: 20px;
  font-size: 18px;

  width: 100%;
  text-align: center;
`;

export const FooterItem = styled.div`
  padding: 2px;
  margin: 5px;
`;

export const FooterImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0px 10px;
  transition: 0.2s;

  :hover {
    padding: 1px;
    content: url(${(props) => props.img});
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: black;

  font-size: 18px;

  transition: 0.2s;

  :hover {
    color: white;
  }
`;
