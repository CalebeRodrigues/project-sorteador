import P from 'prop-types';

import { ButtonStyle as Btn } from './style';

export const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

Button.propTypes = {
  children: P.node.isRequired,
  props: P.any,
};
