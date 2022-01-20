import { Container } from '../Container';
import { FooterBar, FooterContainer, FooterImage, FooterItem, FooterLink } from './style';

import github from '../../assets/img/github.png';
import instagram from '../../assets/img/instagram.png';
import instagram_preto from '../../assets/img/instagram_preto.png';
import linkedin from '../../assets/img/linkedin.png';
import linkedin_preto from '../../assets/img/linkedin_preto.png';
import { A } from '../A';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container style={{ backgroundColor: 'transparent' }}>
        <FooterBar>
          <FooterItem>
            <A href="https://www.instagram.com/calebe.rodri/" target="_blank">
              <FooterImage src={instagram_preto} alt="instagram" img={instagram} />
            </A>
            <A href="https://www.linkedin.com/in/calebe-barros-rodrigues-29a1251a9/" target="_blank">
              <FooterImage src={linkedin_preto} alt="linkedin" img={linkedin}></FooterImage>
            </A>
          </FooterItem>

          <FooterItem>
            <FooterLink href="https://github.com/CalebeRodrigues" target="_blank">
              @ 2022 Calebe Rodrigues
            </FooterLink>
          </FooterItem>
        </FooterBar>
      </Container>
    </FooterContainer>
  );
};
