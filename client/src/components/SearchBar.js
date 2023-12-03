import React, {useState} from 'react';
import axios from 'axios';

const SearchBar = ({updateWeatherData}) =>{
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log('submitting for ', searchInput);
            const payload = JSON.stringify({city: searchInput});
            const response = await axios.get("http://localhost:5000/weather", {params: {city:searchInput}});
            console.log(`Response is `, response);
            updateWeatherData(response.data);
        }catch(error){
            console.error(`Error fetching weather data: ${error}`);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search for weather here.' onChange={handleChange} value={searchInput}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default SearchBar;