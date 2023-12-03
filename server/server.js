const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { WEATHER_API_KEY, SERVER_PORT } = require('../config');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("connected");
});

const port = SERVER_PORT || 5000;
app.listen(port, () => {
    console.log("Server listening on the port http://localhost/" + port);
});

app.get("/:city", async (req, res) => {
    let city = req.params.city
    console.log(`Fetching the weather for ${city}`);
    let weather = {
        name: '',
        time:'',
        temp: '',
        condition: ''
    }

    try{
        let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`); //${WEATHER_API_KEY}
        let weatherData = response.data;
        weather.name = weatherData.location.name;
        weather.time = weatherData.location.localtime;
        weather.temp = weatherData.current.temp_f;
        weather.condition = weatherData.current.condition.text;
        // console.log(`In ${weather.name} it is ${weather.temp} degrees fahrenheit. The local time is ${weather.time} and the condition is ${weather.condition}.`);
    } catch(error) {
        res.status(500).json({error: "internal server error"});
    }

    res.send(JSON.stringify(weather));
});