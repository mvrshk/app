import Header from './components/Header';
import CharacterList from './components/CharacterList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [schools, setSchools] = useState([])
  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

    const filteredCharacters = characters.filter((character) => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
    return (
      <>
          <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} schools={schools}/>
          <CharacterList characters={filteredCharacters} />
      </>
    );
  }

export default App;
