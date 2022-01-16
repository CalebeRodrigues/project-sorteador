import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Navbar } from '../../components/Navbar';
import './App.css';

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
          <textarea
            style={{
              height: '350px',
              width: '100%',
              marginBottom: '5px',
            }}
          ></textarea>
        ) : (
          <div style={{ marginBottom: '15px' }}>
            <p style={{ marginTop: '10px' }}>Sortear número entre:</p>
            <input
              type="number"
              min="1"
              max="50"
              style={{
                height: '50px',
                marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px',
              }}
            />
            e
            <input
              type="number"
              min="1"
              max="50"
              style={{
                height: '50px',
                marginTop: '20px',
                marginLeft: '20px',
              }}
            />
          </div>
        )}

        <Button>Sortear {sorteioType}</Button>
      </Container>
    </div>
  );
}

export default App;
