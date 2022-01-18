import P from 'prop-types';

import { useState } from 'react';
import { Button } from '../../components/Button';
import { InputNumber } from '../../components/InputNumber';
import { randomNumber } from '../../utils/raffle';

export const NumbersDraw = ({ objResult }) => {
  const [qtd, setQtd] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);

  const { setResult, setValue } = objResult;

  const componentsProps = {
    inputQtd: {
      value: qtd,
      onChange: (e) => {
        setQtd(e.target.value);
      },
    },

    inputMin: {
      value: min,
      onChange: (e) => {
        setMin(e.target.value);
      },
    },

    inputMax: {
      value: max,
      onChange: (e) => {
        setMax(e.target.value);
      },
    },

    button: {
      onClick: () => {
        setValue(randomNumber(min, max, qtd));
        setResult(true);
      },
    },
  };

  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <p style={{ marginTop: '10px' }}>
          Sortear <InputNumber {...componentsProps.inputQtd} /> número(s) entre:
        </p>
        <InputNumber {...componentsProps.inputMin} />
        e
        <InputNumber {...componentsProps.inputMax} />
      </div>

      <Button {...componentsProps.button}>Sortear números</Button>
    </>
  );
};

NumbersDraw.propTypes = {
  objResult: P.shape({
    setResult: P.func.isRequired,
    setValue: P.func.isRequired,
  }).isRequired,
};
