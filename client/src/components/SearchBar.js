import React, {useState} from 'react';
import axios from 'axios';

const SearchBar = ({updateWeatherData, updateTimeData}) =>{
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log('submitting for ', searchInput);
            const response = await axios.get("http://localhost:5000/weather", {params: {city:searchInput}});
            console.log(`Response is `, response);
            updateWeatherData(response.data);
            const response2 = await axios.get("http://localhost:5000/time", {params: {name:searchInput}});
            console.log(`Response 2 is `, response2);
            updateTimeData(response2.data);
        }catch(error){
            console.error(`Error fetching weather data: ${error}`);
        }

    }
    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter a location here' onChange={handleChange} value={searchInput}/>
            </form>
        </div>
    )
}

export default SearchBar;