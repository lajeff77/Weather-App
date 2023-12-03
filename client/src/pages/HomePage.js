import React, { useState } from 'react';
import Header from  '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherModule from '../components/WeatherModule';

const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);

    const updateWeatherData = (newData) =>{
        setWeatherData(newData);
    }

    return(
        <div>
            <Header/>
            <SearchBar updateWeatherData={updateWeatherData}/>
            {weatherData && <WeatherModule weatherData={weatherData}/>}
        </div>
    )
}

export default HomePage;