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
        temp: '',
        condition: '',
        icon: ''
    }

    try{
        let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`);
        let weatherData = response.data;
        weather.name = weatherData.location.name;
        weather.region = weatherData.location.region;
        weather.country = weatherData.location.country;
        weather.temp = weatherData.current.temp_f;
        weather.condition = weatherData.current.condition.text;
        weather.icon = 'https:' + weatherData.current.condition.icon;
        console.log("weather:", weather);
    } catch(error) {
        console.log(`internal server error: ${error.message}`);
    }

    res.send(JSON.stringify(weather));
});

app.get("/time", async (req,res) =>{
    let name = req.query.name;
    console.log(`Fetching timezone for ${name}`);
    let time = {
        currentTime: '',
        timezone: ''
    }

    try{
        let response = await axios.get(`http://api.weatherapi.com/v1/timezone.json?key=${WEATHER_API_KEY}&q=${name}`);
        let timeData = response.data;
        let timeDate =  new Date(timeData.location.localtime_epoch * 1000);
        console.log('The response time is :', timeData);
        time.currentTime = timeDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric',  timeZone: timeData.location.tz_id});
        time.timezone = timeDate.toLocaleDateString([], { hour:"numeric", minute:"numeric",  timeZone: timeData.location.tz_id, timeZoneName: 'long'}).replace(time.currentTime, '').trim();
        let commaIndex = time.timezone.indexOf(',');
        time.timezone = time.timezone.substring(commaIndex + 1).trim();

        console.log('Time: ', time);
    }
    catch(error) {
        res.status(error.status).json({msg: error.message});
        throw error;
    }

    res.send(JSON.stringify(time));
});