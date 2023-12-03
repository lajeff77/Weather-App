import React, {useState} from 'react';


const SearchBar = () =>{
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }
    return (
        <div>
            <input type='text' placeholder='Search for weather here.' onChange={handleChange} value={searchInput}/>
            <input type='submit' />
        </div>
    )
}

export default SearchBar;