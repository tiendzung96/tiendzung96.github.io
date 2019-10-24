const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=9479da382fe4e6454b2b21f3e81c03d7';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.weather[0].main);
  


var weather = {
    currentTemp: 30,
    high: 50,
    low: 20,
    humitity: 50,
    windSpeed: 5
};

weather.currentWeather = jsObject.weather[0].main;

let t = weather.currentTemp;
let s = weather.windSpeed;
if(weather.low <= 50 && s > 3){
    weather.windChill = Math.floor(35.74 + 0.6215*t - 35.75*Math.pow(s, 0.16)  + 0.4275*t*Math.pow(s, 0.16)) + '&deg;F';
} else{
    weather.windChill = 'N/A';
}

document.getElementById('current-weather').innerHTML = '<b>Currently:</b> ' + weather.currentWeather;
document.getElementById('high').innerHTML = '<b>High:</b> ' + weather.high + '&deg;F';
document.getElementById('low').innerHTML = '<b>Low:</b> ' + weather.low + '&deg;F';
document.getElementById('wind-chill').innerHTML = '<b>Wind Chill:</b> ' + weather.windChill;
document.getElementById('wind-speed').innerHTML = '<b>Wind Speed:</b> ' + weather.windSpeed + ' mph';

});