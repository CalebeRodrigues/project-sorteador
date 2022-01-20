import styled from 'styled-components';

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;

  :target {
    opacity: 1;
    pointer-events: auto;
  }
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
    transform: scale(1.1);
  }
`;

export const DivModalChildren = styled.div`
  width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: #fff;
`;
