//Section 7
const path = require("path");
const express = require("express");
const hbs = require("hbs"); //handlebars
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//const { error } = require("console");

const app = express();

//Define path for Express config
const directoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partilasPath = path.join(__dirname, "../templates/partials");

//setup handlebars and views location
//Methods
//Tells Express to use hbs for rendering views
app.set("view engine", "hbs");
//Tells Express where to look for the view files when rendering a response
app.set("views", viewsPath);

//used to register partial templates such as "header and footer"
hbs.registerPartials(partilasPath);

//Static mean that it's a static web page that doesn't change and not a dynamic
app.use(express.static(directoryPath));

//start the server up and using port:3000
app.listen(3000, () => {
  console.log("server is up");
});

/*//Help page 
// app.get('/help' , (req , res) => {
//     res.send('Help page')
// })*/

//Lec 3
/*//About page
//we can send HTML to the user 
app.get('/about' , (req , res) => {
    //res.send('About page')
    //using HTML
    res.send('<h1>About page</h1>')
})*/

//Lec 6
//index page
app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Roudy",
  });
});
//about page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Roudy",
  });
});
//help page
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name: "Roudy",
  });
});
//Weather page
//we can send JSON data to the user
//rout      //function called with 2 arguments
//request response

app.get("/weather", (req, res) => {
  // res.render("weather", {
  //   title: "Weather page",
  //   name: "Roudy",
  // });
  if (!req.query.address) {
    return res.send({
      error: "no address",
    });
  }
  //   res.send({
  //     lat: "1",
  //     lon: "2",
  //     address: req.query.address,
  //   });
  //   const lat = 40.7143;
  //   const lon = -74.006;
  geocode(req.query.address, (error, { lat, lon } = {}) => {
    if (error) {
      return res.send({ error });
    } else if (!lat || !lon) {
      return res.send({ error });
    }
    // res.send({
    //   lati: lat,
    //   long: lon,
    // });
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        address: req.query.address,
        weather: forecastData.weather,
      });
    });
  });
});

//chatgbt
// app.get("/weather", (req, res) => {
//   if (!req.query.address) {
//     return res.send({
//       error: "You must provide an address!",
//     });
//   }

//   geocode(req.query.address, (error, { lat, lon } = {}) => {
//     if (error) {
//       return res.send({ error });
//     }

//     forecast(lat, lon, (error, forecastData) => {
//       if (error) {
//         return res.send({ error });
//       }

//       res.send({
//         forecast: forecastData,
//         location: req.query.address,
//         lat,
//         lon,
//       });
//     });
//   });
// });

//Test
// app.get("/product", (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: "enter a search",
//     });
//   }
//   console.log(req.query.search);
//   res.send({
//     name: "product",
//     price: 1000,
//   });
// });

//help/*
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 ",
    name: "Roudy",
    errorMess: "Help articale not found",
  });
});
//all the other pages
//request , response
// app.get("*", (req, res) => {
//   res.render("404", {
//     title: "404",
//     name: "alfred",
//     errorMess: "Page not found 404",
//   });
// });
