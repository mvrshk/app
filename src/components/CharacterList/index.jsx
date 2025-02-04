import React from 'react';
import CharacterCard from '../CharacterCard';

const CharacterList = ({characters, schools}) => {
    return (
        <main>
        <div class="cards">
            {
                characters && characters.map((character)=> {
                    return <CharacterCard character={character} schools={schools}/>
                })
            }
        </div>
    </main>
    );
}

export default CharacterList;

