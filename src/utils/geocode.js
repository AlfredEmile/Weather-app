// const request = require("request");
// // API key and city
// const apiKey = "4f9d72092d69913c7cba6dd3fa5fde89";
// 
// const geocode = (address, callback) => {
//   const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apiKey}&units=us`;
//   request({ url, json: true }, (error, { body } = {}) => {
//     if (error) {
//       callback(" try again", undefined);
//     } else if (body.coord.lon === 0 || body.coord.lat === 0 || !body) {
//       callback("error try again", undefined);
//     } else {
//       //object destruction
//       const { lat, lon } = body.coord;
//       callback(undefined, { lon, lat });
//       // callback(undefined, {
//       //   lon: response.body.coord.lon,
//       //   lat: response.body.coord.lat,
//       // });
//     }
//   });
// };

// module.exports = geocode;

//chatgbt
const request = require("request");
const apiKey = "4f9d72092d69913c7cba6dd3fa5fde89";
//URL: http://api.openweathermap.org/data/2.5/weather?q=new york&appid=4f9d72092d69913c7cba6dd3fa5fde89&units=us
const geocode = (address, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apiKey}&units=us`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (!body || !body.coord) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const { lon, lat } = body.coord;

      callback(undefined, { lon, lat });
    }
  });
};

module.exports = geocode;
