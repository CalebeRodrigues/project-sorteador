import styled from 'styled-components';
import { Container } from '../Container';

export const Footer = () => {
  return (
    <div style={{ border: '1px solid green', marginTop: '20px', height: '120px' }}>
      <Container style={{ border: '1px solid purple' }}>
        <FooterBar>Footer</FooterBar>
      </Container>
    </div>
  );
};

const FooterBar = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
`;
