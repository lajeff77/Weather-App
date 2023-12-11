import React, { useState } from 'react';
import Header from  '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherModule from '../components/WeatherModule';
import Description from '../components/Description';

const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [timeData, setTimeData] = useState(null);

    const updateWeatherData = (newData) =>{
        setWeatherData(newData);
    }

    const updateTimeData = (newData) => {
        setTimeData(newData)
    }

    return(
        <div className='home-page'>
            <Header/>
            <Description/>
            <SearchBar updateWeatherData={updateWeatherData} updateTimeData={updateTimeData}/>
            {weatherData && timeData && <WeatherModule weatherData={weatherData} timeData={timeData}/>}
        </div>
    )
}

export default HomePage;