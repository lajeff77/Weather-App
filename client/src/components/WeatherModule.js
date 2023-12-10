import React from 'react';

const WeatherModule = ({ weatherData}) => {
    return (
        <div className='weather-module-container'>
            <div className='weather-module'>
                <div className='name'>
                    <h2>{weatherData.name}, {weatherData.region} {weatherData.country}</h2>
                </div>
                <div className='weather-info'>
                    <div className='condition-info'>
                        <img src={weatherData.icon} alt={weatherData.condition}/>
                        <p>{weatherData.condition}</p>
                    </div>
                    <div className='temperature-info'>
                        <p className='temperature'>{weatherData.temp}&deg;</p>
                        <p className='temperature-unit'>Fahrenheit</p>
                    </div>
                    <div className='time-info'>
                        <p className='time'>{weatherData.time}</p>
                        <p className='timezone'>{weatherData.timezone}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default WeatherModule;