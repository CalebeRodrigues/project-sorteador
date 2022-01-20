import styled from 'styled-components';

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: ${(prop) => (prop.show ? 1 : 0)};
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: ${(prop) => (prop.show ? 'auto' : 'none')};
`;

export const BtnExitModal = styled.a`
  text-decoration: none;
  position: absolute;
  width: 30px;
  right: -15px;
  top: -20px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #ff4545;
  border-radius: 50%;
  font-size: 16px;
  color: #8d0000;

  transition: 0.3s;

  :hover {
    background: #ec0000;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const DivModalChildren = styled.div`
  word-wrap: break-word;
  width: 600px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: #fff;

  @media screen and (max-width: 427px) {
    width: 350px;
    padding: 10px 15px;
  }

  @media screen and (max-width: 376px) {
    width: 300px;
    padding: 4px 8px;
  }

  @media screen and (max-width: 321px) {
    width: 280px;
    padding: 4px 2px;
  }
`;
