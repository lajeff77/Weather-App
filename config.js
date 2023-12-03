const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  SERVER_PORT: process.env.SERVER_PORT
};