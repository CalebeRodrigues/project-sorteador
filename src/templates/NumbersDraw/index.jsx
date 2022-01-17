import { useState } from 'react';
import { Button } from '../../components/Button';
import { InputNumber } from '../../components/InputNumber';
import { randomNumber } from '../../utils/raffle';

export const NumbersDraw = () => {
  const [qtd, setQtd] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);

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
        alert(randomNumber(min, max, qtd).join(' - '));
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
