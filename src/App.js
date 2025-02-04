import Header from './components/Header';
import CharacterList from './components/CharacterList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [schools, setSchools] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {

    fetch('http://localhost:3000/schools').then((data) => {
      return data.json();
    }).then((schools) => {
      console.log(schools);
      setSchools(schools);
    })

    fetch('http://localhost:3000/characters').then((data) => {
      return data.json();
    }).then((characters) => {
      console.log(characters);
      setCharacters(characters);
    })
  }, []);

 
    return (
      <>
          <Header schools={schools}/>
          <CharacterList characters = {characters}/>
      </>
    );
  }

export default App;
