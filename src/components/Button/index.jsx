import P from 'prop-types';

import { Button as Btn } from './style';

export const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

Button.propTypes = {
  children: P.string.isRequired,
  props: P.any,
};
