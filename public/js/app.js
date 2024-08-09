console.log("this is the javascript page");

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=4f9d72092d69913c7cba6dd3fa5fde89&units=us"
// ).then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data);
//     }
//   });
// });
// const weatherForm = document.querySelector("form");

// weatherForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=4f9d72092d69913c7cba6dd3fa5fde89&units=us"
//   ).then((response) => {
//     response.json().then((data) => {
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         console.log(data);
//       }
//     });
//   });
// });

console.log("Client Side JS is loaded!");
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading";
  messageTwo.textContent = "";
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.address;
          messageTwo.textContent = JSON.stringify(data.weather);
          console.log(data);
        }
      });
    }
  );
});
