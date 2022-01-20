import { Container } from '../Container';
import { FooterBar, FooterContainer, FooterLink } from './style';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container style={{ backgroundColor: 'transparent' }}>
        <FooterBar>
          Site desenvolvido por{' '}
          <FooterLink href="https://github.com/CalebeRodrigues">@Calebe Rodrigues, 2022</FooterLink>{' '}
        </FooterBar>
      </Container>
    </FooterContainer>
  );
};
