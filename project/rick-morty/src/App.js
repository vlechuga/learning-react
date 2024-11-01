import imageRiskMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json(); 
    console.log(characterApi.results);
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>
        {characters ? (<Characters characters={characters} setCharacters={setCharacters}/>) : (
          <>
            <img src={imageRiskMorty} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personal</button>
          </>
        )}
       
        
      </header>
    </div>
  );
}

export default App;
