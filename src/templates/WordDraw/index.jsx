import { useState } from 'react';
import { Button } from '../../components/Button';
import { InputNumber } from '../../components/InputNumber';
import { TextArea } from '../../components/TextArea';
import { randomWord } from '../../utils/raffle';

export const WordDraw = () => {
  const [words, setWords] = useState('');
  const [qtd, setQtd] = useState(1);

  const componentsProps = {
    inputQtd: {
      value: qtd,
      onChange: (e) => setQtd(e.target.value),
    },

    textArea: {
      value: words,
      onInput: (e) => {
        setWords(e.target.value);
      },
    },

    button: {
      onClick: () => {
        alert(randomWord(words.split('\n'), qtd).join(' - '));
      },
    },
  };

  return (
    <>
      <p>
        Sortear <InputNumber {...componentsProps.inputQtd} /> palavra(s) entre:
      </p>
      <TextArea {...componentsProps.textArea} />
      <Button {...componentsProps.button}>Sortear palavras</Button>
    </>
  );
};
