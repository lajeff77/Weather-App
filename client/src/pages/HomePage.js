import React from 'react';
import Header from  '../components/Header';
import SearchBar from '../components/SearchBar';
import WeatherModule from '../components/WeatherModule';

const HomePage = () => {
    return(
        <div>
            <Header/>
            <SearchBar/>
            <WeatherModule/>
        </div>
    )
}

export default HomePage;