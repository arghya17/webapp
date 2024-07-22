const iconElement = document.querySelector(".weather-icon");
const locationIcon = document.querySelector(".location-icon");
const tempElement = document.querySelector(".temprature-value p");
const descElement = document.querySelector(".temprature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

var input = document.getElementById("search");

let city = "";
let latitude = 0.0;
let longitude = 0.0;

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    city = input.value;
    console.log(city);
    getSearchWeather(city);
  }
});
const weather = {};
weather.temprature = {
  unit: "metric",
};
const key = "b3aaa0b3323c0baab93aff38f75b44cb";



if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError)
}else{
    notificationElement.style.display='block'
    notificationElement.innerHTML='<p> Browser doesnt support GeoLocation</p>'
}
function setPosition(position){
    latitude=position.coords.latitude
    longitude=position.coords.longitude

    getWeather(latitude,longitude)

}
locationIcon.addEventListener('click',function(event){
    getWeather(latitude,longitude)
})
// display error if user denied 
function showError(error){
    notificationElement.style.display='block'
    notificationElement.innerHTML=`<p>${error.message}</p>`
}
// get weather using city from textbox
function getSearchWeather(city) {
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(URL)
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        weather.temprature.value = data.main.temp;
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
      })
      .then(function () {
        displayWeather();
      });
  }

  // get weather using city from browser geolocation
function getWeather(latitude,longitude){
    let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`

    fetch(URL)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.temprature.value = data.main.temp;
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

// reuasble code to display the data
function displayWeather() {
    iconElement.innerHTML = `<img src="./images/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temprature.value} * <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city} , ${weather.country}`;
  }