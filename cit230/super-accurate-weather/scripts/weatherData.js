function weatherData(zipCode) {
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip='+ zipCode + ',us&units=imperial&appid=9479da382fe4e6454b2b21f3e81c03d7'; //Preston = 83263
    fetch(weatherURL)
      .then((response) => response.json())
      .then((weatherObject) => {
        console.log(weatherObject);
    
    //TESTING
        let weather = {};
    
        weather.currentWeather = weatherObject.weather[0].main;
        weather.currentTemp = Math.round(weatherObject.main.temp);
        weather.high = Math.round(weatherObject.main.temp_max);
        weather.low = Math.round(weatherObject.main.temp_min);
        weather.humidity = weatherObject.main.humidity;
        weather.windSpeed = Math.round(weatherObject.wind.speed);
    
    
    //WEATHER ICON
    
        const imagesrc = 'images/weather-icon/' + weatherObject.weather[0].icon + '.png';  
        const desc = weatherObject.weather[0].description;  
    
        document.getElementById('weather-icon').setAttribute('src', imagesrc); 
    
        document.getElementById('weather-icon').setAttribute('alt', desc);
    
        // console.log(weather);
    
        let t = weather.currentTemp;
        let s = weather.windSpeed;
        if(weather.low <= 50 && s > 3){
            weather.windChill = Math.round(35.74 + 0.6215*t - 35.75*Math.pow(s, 0.16)  + 0.4275*t*Math.pow(s, 0.16)) + '&deg;F';
        } else{
            weather.windChill = 'N/A';
        }
    
        document.getElementById('current-weather').innerHTML = '<b>Currently:</b> ' + weather.currentWeather;
        document.getElementById('current-temp').innerHTML = '<b>Temperature:</b> ' + weather.currentTemp  + '&deg;F';
        document.getElementById('high').innerHTML = '<b>High:</b> ' + weather.high + '&deg;F';
        document.getElementById('low').innerHTML = '<b>Low:</b> ' + weather.low + '&deg;F';
        document.getElementById('humidity').innerHTML = '<b>Humidity:</b> ' + weather.humidity + ' %';
        document.getElementById('wind-chill').innerHTML = '<b>Wind Chill:</b> ' + weather.windChill;
        document.getElementById('wind-speed').innerHTML = '<b>Wind Speed:</b> ' + weather.windSpeed + ' mph';
    
    });
    
    //FORECAST-----------------------------------------------------

    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + ',us&units=imperial&appid=9479da382fe4e6454b2b21f3e81c03d7'; //Preston = 83263
    fetch(forecastURL)
      .then((responseF) => responseF.json())
      .then((forecastObject) => {
        // console.log(forecastObject);
    
        //GET DATE
        let currentDate = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        document.getElementById("day-1").innerHTML = days[currentDate.getDay()+1];
        document.getElementById("day-2").innerHTML = days[currentDate.getDay()+2];
        document.getElementById("day-3").innerHTML = days[currentDate.getDay()+3];
        document.getElementById("day-4").innerHTML = days[currentDate.getDay()+4];
        document.getElementById("day-5").innerHTML = days[currentDate.getDay()+5];
    
    // TEST ***********************************************
    for (let i=1; i<6; i++){
        document.getElementById("temp-"+ i).innerHTML = Math.ceil(forecastObject.list[i].main.temp) + '&deg;F';
    
        
        const imagesrc = 'images/weather-icon/' +forecastObject.list[i].weather[0].icon + '.png';  
        const desc = forecastObject.list[i].weather[0].description;  
        
    
        document.getElementById('forecast-icon-' + i).setAttribute('src', imagesrc); 
    
        document.getElementById('forecast-icon-' + i).setAttribute('alt', desc);
    }
    
    });
};
