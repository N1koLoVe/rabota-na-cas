let API_URL =
  "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";

const main = document.querySelector(".main");
const homeBtn = document.querySelector(".home-btn");
const hourlyBtn = document.querySelector(".hourly-btn");
const aboutBtn = document.querySelector(".about-btn");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

const renderPage = (data) => {
  const currentDate = new Date(data.current.dt * 1000);
  main.innerHTML = "";
  main.innerHTML = `
  <div class="current-div">
  <h1>Home</h1>
  <h2>Current date : ${currentDate.toLocaleDateString(`fr`)}</h2>
    <h4>Temperature : ${data.current.temp}</h4>
    <h4>Feels like temperature : ${data.current.feels_like}</h4>
    <h4>Wind speed : ${data.current.wind_speed}</h4>
    <img src="http://openweathermap.org/img/wn/${
      data.current.weather[0].icon
    }@2x.png" alt="">
    <h4>Weather description : ${data.current.weather[0].description}</h4>
    <h4>Humidity : ${data.current.humidity}</h4>
    <div class ="card-container"></div>
    </div>`;

  let dailyHTML = "";
  for (let el of data.daily) {
    const dailyDate = new Date(el.dt * 1000);
    dailyHTML += `
          <div class="day-box">
          <h4>Date: ${dailyDate.toLocaleDateString("fr")}</h4>
          <h4>Min Temp: ${el.temp.min}</h4>
          <h4>Max Temp: ${el.temp.max}</h4>
          <h4>Humidity: ${el.humidity}</h4>
          <img src= "http://openweathermap.org/img/wn/${
            el.weather[0].icon
          }@2x.png" width = "150">
          <h4>Description: ${el.weather[0].description}</h4>
        </div>`;
  }
  document.querySelector(".card-container").innerHTML = dailyHTML;
};

const renderHourly = (data) => {
  main.innerHTML = `<div class="hourly-div">
  <h1>Hourly</h1>
  <div class="hourly-card"></div>
  </div>`;

  let hourlyHtml = "";
  for (let el of data.hourly) {
    const hourlyInfo = new Date(el.dt * 1000);
    hourlyHtml += `
    <div class="hourly-box">
  <h2>${hourlyInfo.toLocaleTimeString(`fr`)}</h2>
    <h4>Temperature : ${el.temp}</h4>
    <h4>Feels like temperature : ${el.feels_like}</h4>
    <h4>Wind speed : ${el.wind_speed}</h4>
    <img src="http://openweathermap.org/img/wn/${
      el.weather[0].icon
    }@2x.png" alt="">
    <h4>Weather description : ${el.weather[0].description}</h4>
    <h4>Humidity : ${el.humidity}</h4>
    </div>`;
  }
  document.querySelector(".hourly-card").innerHTML = hourlyHtml;
};

const aboutMe = () => {
  main.innerHTML = ``;
  main.innerHTML = `
  <div class="about">
  <h1>Jordan Nikolov</h1>
  <h3>Random guy trying to learn javascript, trying to become a streamer and a footballer</h3>
  </div>`;
};

function fetchApiWeather(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      renderPage(data);

      hourlyBtn.addEventListener("click", () => {
        renderHourly(data);
      });

      homeBtn.addEventListener("click", () => {
        renderPage(data);
      });

      aboutBtn.addEventListener("click", () => {
        aboutMe();
      });
    });
}

fetchApiWeather(API_URL);

function searchApi() {
  console.log(searchInput.value);
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b`;

  fetch(geoUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { lat, lon } = data[0];

      const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b`;

      fetchApiWeather(weatherUrl);
    });
}

searchBtn.addEventListener("click", searchApi);
