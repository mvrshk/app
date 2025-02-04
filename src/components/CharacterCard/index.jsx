import React, { useEffect, useState } from 'react';

const CharacterCard = ({character}) => {

    const [schoolName, setSchoolName] = useState('');

    useEffect(() =>{
    fetch(`http://localhost:3000/schools/${character.schoolId}`)
    .then(res  => res.json())
    .then(data => setSchoolName(data.name));
}, [character.schoolId]);
    return (
        <div class="card-block">
                <div class="card-img">
                    <img src={'http://localhost:3000/static/' + character.image} alt="img"/>
                </div>

                <div class="card-text">
                    <h3>{character.name}</h3>
                    <p>{schoolName}</p>
                    <p>{character.age} лед.</p>
                </div>
            </div>
    );
}

export default CharacterCard;

