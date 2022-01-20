import styled from 'styled-components';

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
    transform: scale(0.9);
    content: url(${(props) => props.img});
  }

  @media screen and (max-width: 768px) {
    content: url(${(props) => props.img});
    height: 25px;
    width: 25px;

    :hover {
      content: url(${(props) => props.src});
    }
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

  @media screen and (max-width: 769px) {
    font-size: 16px;
    color: white;

    :hover {
      color: gray;
    }
  }
`;
