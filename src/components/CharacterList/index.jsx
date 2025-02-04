import React from 'react';
import CharacterCard from '../CharacterCard';

const CharacterList = ({characters}) => {
    return (
        <main>
        <div class="cards">
            {
                characters && characters.map((character)=> {
                    return <CharacterCard character={character} key={character.id}/>
                })
            }
        </div>
    </main>
    );
}

export default CharacterList;

