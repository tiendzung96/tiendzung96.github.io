const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=83263,us&units=imperial&appid=9479da382fe4e6454b2b21f3e81c03d7';
fetch(weatherURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);

    let weather = {};
    weather.currentTemp = Math.round(weatherObject.main.temp);


    const imagesrc = 'https://openweathermap.org/img/w/' + weatherObject.weather[0].icon + '.png';  
    const desc = weatherObject.weather[0].description;  

    document.getElementById('weather-icon').setAttribute('src', imagesrc); 

    document.getElementById('weather-icon').setAttribute('alt', desc);

    // console.log(weather);

    document.getElementById('current-temp').innerHTML =  weather.currentTemp;


});