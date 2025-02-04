import React from 'react';

const CharacterCard = ({character}) => {
    return (
        <div class="card-block">
                <div class="card-img">
                    <img src={'http://localhost:3000/static/' + character.image} alt="img"/>
                </div>

                <div class="card-text">
                    <h3>{character.name}</h3>
                    <p>School: {character.schoolId}</p>
                    <p>Age:{character.age}</p>
                </div>
            </div>
    );
}

export default CharacterCard;

