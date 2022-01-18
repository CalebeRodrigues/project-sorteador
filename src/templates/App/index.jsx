import { useContext, useEffect, useRef, useState } from 'react';
import { Container } from '../../components/Container';
import { Navbar } from '../../components/Navbar';
import { NumbersDraw } from '../NumbersDraw';
import { CardResultArea, CardResultAreaItem } from '../../components/CardResult';
import { WordDraw } from '../WordDraw';

function App() {
  const [sorteioType, setSorteioType] = useState('numeros');
  const [result, setResult] = useState(false);
  const [value, setValue] = useState([]);

  let id = 0;

  const resultProp = {
    setValue,
    setResult,
  };

  const radioRef = useRef();

  useEffect(() => {
    radioRef.current.checked = true;
  }, [radioRef]);

  const handleClick = () => {
    id = 0;
    setResult(false);
    setValue('');
    if (!radioRef.current.checked) {
      setSorteioType('nomes');
      return;
    }
    setSorteioType('numeros');
  };

  return (
    <>
      <Navbar />

      <Container>
        <form onClick={handleClick}>
          <input ref={radioRef} id="num" type="radio" name="type-sorteio" /> <label htmlFor="num">Numeros</label>
          <span style={{ marginLeft: '10px' }}> </span>
          <input id="nomes" type="radio" name="type-sorteio" /> <label htmlFor="nomes">Palavras</label>
        </form>

        {sorteioType == 'nomes' ? (
          <WordDraw objResult={{ ...resultProp }} />
        ) : (
          <NumbersDraw objResult={{ ...resultProp }} />
        )}

        <div style={{ marginTop: '20px' }}>
          {result ? (
            <CardResultArea>
              {value.map((resp) => (
                <CardResultAreaItem key={id++}>{resp}</CardResultAreaItem>
              ))}
            </CardResultArea>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
