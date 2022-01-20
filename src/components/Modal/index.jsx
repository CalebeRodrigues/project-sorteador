import P from 'prop-types';

import { BtnExitModal, DivModal, DivModalChildren } from './style';

export const Modal = ({ id, show, setShow, children }) => {
  const handleClick = () => {
    setShow((bool) => !bool);
  };

  return (
    <>
      <DivModal id={id} show={show}>
        <DivModalChildren>
          <BtnExitModal title="Fechar" onClick={handleClick}>
            x
          </BtnExitModal>
          <div>{children}</div>
        </DivModalChildren>
      </DivModal>
    </>
  );
};

Modal.propTypes = {
  id: P.string,
  children: P.node,
  show: P.bool,
  setShow: P.func,
};
