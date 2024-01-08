import { useState, useEffect } from 'react'

import Header from './components/Header.jsx';
import Prompt from './components/Prompt.jsx';
import Main from './components/Main.jsx';
import Enunt from './components/Enunt.jsx';
import './styles/styles.scss';

function App() {
  const [gameStarted, setGameStarted] = useState('');
  const [n, setN] = useState('');
  const [m, setM] = useState('');
  const [matrix, setMatrix] = useState('');
  const [enuntClicked, setEnuntClicked] = useState('');

    useEffect(() => {
      if (matrix)
        setGameStarted(true);
    }, [matrix])


  return (
    <div className='container'>
      <Header setEnuntClicked={setEnuntClicked}/>
      {gameStarted ?
      <Main n={n} m={m} matrix={matrix} />
      :
      <Prompt n={n} m={m} setN={setN} setM={setM} matrix={matrix} setMatrix={setMatrix}/>
      }
      {enuntClicked &&
        <Enunt setEnuntClicked={setEnuntClicked}/>
      }
    </div>
  )
}

export default App
