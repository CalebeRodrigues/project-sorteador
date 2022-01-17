import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { InputNumber } from '../../components/InputNumber';
import { Navbar } from '../../components/Navbar';
import { TextArea } from '../../components/TextArea';

function App() {
  const [sorteioType, setSorteioType] = useState('numeros');
  const radioRef = useRef();

  useEffect(() => {
    radioRef.current.checked = true;
  }, [radioRef]);

  const handleClick = () => {
    if (!radioRef.current.checked) {
      setSorteioType('nomes');
      return;
    }
    setSorteioType('numeros');
  };

  return (
    <div>
      <Navbar />

      <Container>
        <form onClick={handleClick}>
          <input ref={radioRef} id="num" type="radio" name="type-sorteio" /> <label htmlFor="num">Numeros</label>
          <span> </span>
          <input id="nomes" type="radio" name="type-sorteio" /> <label htmlFor="nomes">Nomes</label>
        </form>

        {sorteioType == 'nomes' ? (
          <TextArea />
        ) : (
          <div style={{ marginBottom: '15px' }}>
            <p style={{ marginTop: '10px' }}>
              Sortear <InputNumber /> número(s) entre:
            </p>
            <InputNumber />
            e
            <InputNumber />
          </div>
        )}

        <Button>Sortear {sorteioType}</Button>
      </Container>
    </div>
  );
}

export default App;
