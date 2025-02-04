import React from 'react';

const SearchBar = ({schools, searchTerm, onSearchChange}) => {

    const handleInputChange = (event) => {
        onSearchChange(event.target.value); // Передаем новое значение в App
      };


    return (
    <div class="header-input">
        <label for="input-name">Name<input class="name-input" name="input-name" type="text" placeholder="SearchByName" value={searchTerm} onChange={handleInputChange}/></label>

        <label for="input-school">School
            <select name="input-school" class="name-school" id="input-school">
                <option value="" disabled selected>Choose one</option>
                {
                    schools && schools.map((school) => {
                        return <option key={school.id} value={school.id}>{school.name}</option>
                    })
                }
            </select>
        </label>
    </div> 
    );
}

export default SearchBar;


