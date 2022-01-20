import P from 'prop-types';

import { BtnExitModal, DivModal, DivModalChildren } from './style';

export const Modal = ({ id }) => {
  return (
    <>
      <DivModal id={id}>
        <DivModalChildren>
          <BtnExitModal href="#fechar" title="Fechar" className="fechar">
            x
          </BtnExitModal>
          <h2>Janela Modal</h2>
          <p>Esta é uma simples janela de modal.</p>
          <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
        </DivModalChildren>
      </DivModal>
    </>
  );
};

Modal.propTypes = {
  id: P.number.isRequired,
};
