import { useState } from 'react';
import { LearningToUse } from '../../templates/LearningToUse';
import { Modal } from '../Modal';
import { Container, NavButton, Text } from './style';

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Text>Sorteador</Text>
      <NavButton onClick={() => setShowModal((bool) => !bool)}>Como usar?</NavButton>

      <Modal id={'modalComoUsar'} show={showModal} setShow={setShowModal}>
        <LearningToUse />
      </Modal>
    </Container>
  );
};
