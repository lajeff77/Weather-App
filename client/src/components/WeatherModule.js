import React from 'react';

const WeatherModule = ({ weatherData}) => {
    return (
        <div>
            <h2>City: {weatherData.name}</h2>
            <p>Time: {weatherData.time}</p>
            <p>Temperature: {weatherData.temp}</p>
            <p>Condition: {weatherData.condition}</p>
        </div>
    )
};

export default WeatherModule;