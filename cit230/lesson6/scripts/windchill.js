var weather = {
    currentWeather: 'Sunny',
    high: 50,
    low: 20,
    humitity: 50,
    windSpeed: 5
};

let t = (weather.low + weather.high)/2;
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

