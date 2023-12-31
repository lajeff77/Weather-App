# ❤️ Loving you Weather ❤️

## 📖 About
This React app makes use of the Realtime api from weatherapi.com to display the current temperature and weather condition of a given city. The app also displays the local time using the Timezone api from weatherapi.com. 

Type in any city in the search bar to fetch the weather data. The location, temperature, and local time will be displayed.

Learn more about weatherapi.com [here](https://www.weatherapi.com/).

## 🔧 The Inner Workings (For the nerds 🤓)
1. User enters a location into an input field. This location could be a postal/zip code, ip address, latitude/longitude coordinates, or a city name.
2. User submits the location. The submission calls weatherapi.com twice, once for the Realtime API and another for the Timezone API.
3. The Realtime API fetches the weather. The response provides us location information such as the city, region, and country. It also provides us the temperature in fahrenheit.
4. The Timezone API fetches the time based on the name of the city. We receive the timezone name and local time for that city.
5. The information is displayed on the weather module.

## ⛺ Setup
1. Ensure git is installed.
2. Ensure npm is installed.
3. Clone this repo with the following command:
``` 
https://github.com/lajeff77/Weather-App.git 
```
4. Download all the dependencies with the following command:
```
npm run setup
```
5. Email me at [lajeff77@gmail.com](mailto:lajeff77@gmail.com) to receive a copy of my API key or generate your own API key from weatherapi.com. See the getting started section of the [docs](https://www.weatherapi.com/docs/).
6. Create a .env file and add your API key

```
WEATHER_API_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 🏃🏾 Running Locally
1. Start the server with the following command: 
```
node server/server.js  
```

2. Start the client with the following commands: 
```
cd client
npm start
```
The server runs on http://localhost:5000 and the client runs on http://localhost:3000.

You can configure the server port in your .env file.

```
SERVER_PORT = 5001
```

## 🔎 Troubleshooting

### One of the ports is already in use

```
Error: listen EADDRINUSE: address already in use :::5000
```

You need to enter the following commands in order to kill the process running on the port.

```bash
sudo lsof -i :<PortNumber>
kill -9 <PID>
```

See this article: https://codinhood.com/nano/macos/find-kill-proccess-port-macos/

If you see this error for port 5000 on Mac and the kill command doesn't work, check this thread. Control center is known to use port 5000 to scan for airplay: https://developer.apple.com/forums/thread/682332

## 🔗 Resources
 - How to setup a MERN app: https://dev.to/birdy/mern-stack-project-setup-to-push-to-github-4l5e
 - MongoDB node.js quickstart guide: https://www.mongodb.com/docs/drivers/node/v3.6/quick-start/ 
 - MongoDB, Node, and Express REST app example: https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
 - Free Weather APIs: https://rapidapi.com/blog/access-global-weather-data-with-these-weather-apis/
 - Into to Express js: https://www.youtube.com/watch?v=dyMCr2lD5k0&ab_channel=Simplilearn
 - Get param in express: https://www.geeksforgeeks.org/how-to-use-get-parameter-in-express-js/
 - Weather API docs: https://www.weatherapi.com/docs/
 - How to use axios: https://masteringjs.io/tutorials/axios/json
 - Return JSON in express: https://stackoverflow.com/questions/49799307/how-to-return-data-in-a-post-request-in-express-js
 - How to make a .env file in a node project: https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj
 - .env file formatting: https://stackoverflow.com/questions/71538752/when-are-quotes-needed-in-env-file
 - CORS middleware installation and usage: https://expressjs.com/en/resources/middleware/cors.html
 - React Search Bar: https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
 - What is event.preventDefault() : https://www.robinwieruch.de/react-preventdefault/
 - How to use the body in express: https://www.geeksforgeeks.org/express-js-req-body-property/
 - Adding a body in node: https://stackoverflow.com/questions/51415439/how-can-i-add-raw-data-body-to-an-axios-request
 - Website fonts: https://www.techradar.com/news/internet/top-20-fonts-for-the-web-909082
 - Helvetica settings css: https://stackoverflow.com/questions/879769/is-helvetica-a-browser-base-font
 - Flexbox guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 - CSS colors: https://www.computerhope.com/htmcolor.htm 
 - Epoch to localtime: https://stackoverflow.com/questions/4631928/convert-utc-epoch-to-local-date
 - Responsive design CSS: https://www.youtube.com/watch?v=VQraviuwbzU&ab_channel=KevinPowell
 - EMs vs REMs: https://www.youtube.com/watch?v=_-aDOAMmDHI&ab_channel=KevinPowell
 - Color schemes for websites (implemented #13, Red and Lively): https://visme.co/blog/website-color-schemes/
 - testing with JEST: https://jestjs.io/docs/getting-started
