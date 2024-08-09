// const request = require("request");
// const apiKey = "4f9d72092d69913c7cba6dd3fa5fde89";
// //https://api.openweathermap.org/data/2.5/weather?lat=40.7143&lon=-74.006&appid=4f9d72092d69913c7cba6dd3fa5fde89&units=us
// const forecast = (lat, lon, callback) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=us`;

//   request({ url, json: true }, (error, { body } = {}) => {
//     if (error) {
//       callback("No connection", null);
//     } else if (lat === 0 || lon === 0 || !body) {
//       callback("Invalid location", null);
//     } else {
//       //object destruction
//       const { weather } = body;
//       callback(null, { weather });
//       //   callback(null, response.body.weather);
//     }
//   });
// };

// module.exports = forecast;

//chatgbt
const request = require("request");
const apiKey = "4f9d72092d69913c7cba6dd3fa5fde89";

const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=us`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (!body || !body.weather) {
      callback("Unable to get weather data. Try again later.", undefined);
    } else {
      // const { weather } = body;
      callback(undefined, body.cod);
    }
  });
};

module.exports = forecast;
