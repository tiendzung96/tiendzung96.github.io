var weather = {
    currentWeather: 'Sunny',
    high: 50,
    low: 20,
    humitity: 50,
    windSpeed: 5
};

console.log(weather);

document.getElementById('current-weather').innerHTML = '<b>Currently:</b> ' + weather.currentWeather;
document.getElementById('high').innerHTML = '<b>High:</b> ' + weather.high + '&deg;F';
document.getElementById('low').innerHTML = '<b>Low:</b> ' + weather.low + '&deg;F';
document.getElementById('wind-chill').innerHTML = '<b>Wind Chill:</b> ' + weather.low + '&deg;F';
document.getElementById('wind-speed').innerHTML = '<b>Wind Speed:</b> ' + weather.windSpeed + ' mph';