const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { WEATHER_API_KEY, SERVER_PORT } = require('../config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("connected");
});

const port = SERVER_PORT || 5000;
app.listen(port, () => {
    console.log("Server listening on the port http://localhost/" + port);
});

app.get("/weather", async (req, res) => {
    let city = req.query.city
    console.log(`Fetching the weather for ${city}`);
    let weather = {
        name: '',
        region: '',
        country: '',
        time: '',
        timezone: '',
        temp: '',
        condition: '',
        icon: ''
    }

    try{
        let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`);
        let weatherData = response.data;
        let weatherDate =  new Date(weatherData.location.localtime_epoch * 1000);
        weather.name = weatherData.location.name;
        weather.region = weatherData.location.region;
        weather.country = weatherData.location.country;
        weather.time = weatherDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
        weather.timezone = weatherDate.toLocaleTimeString([], { hour:"numeric", minute:"numeric", timeZoneName: 'long' }).replace(weather.time, '').trim();
        weather.temp = weatherData.current.temp_f;
        weather.condition = weatherData.current.condition.text;
        weather.icon = 'https:' + weatherData.current.condition.icon;
        console.log("weather:", weather);
    } catch(error) {
        res.status(500).json({error: "internal server error"});
    }

    res.send(JSON.stringify(weather));
});