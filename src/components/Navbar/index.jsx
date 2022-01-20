import { Modal } from '../Modal';
import { Container, NavButton, Text } from './style';

export const Navbar = () => {
  return (
    <Container>
      <Text>Sorteador</Text>
      <a href="#modalComoUsar">
        <NavButton>Como usar?</NavButton>
      </a>
      <Modal id={'modalComoUsar'} />
    </Container>
  );
};
