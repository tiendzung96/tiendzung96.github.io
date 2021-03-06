/* GET DATE */
function showCurrentDate(){
    let currentDate = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    document.getElementById("day-1").innerHTML = days[currentDate.getDay()+1];
    document.getElementById("day-2").innerHTML = days[currentDate.getDay()+2];
    document.getElementById("day-3").innerHTML = days[currentDate.getDay()+3];
    document.getElementById("day-4").innerHTML = days[currentDate.getDay()+4];
    document.getElementById("day-5").innerHTML = days[currentDate.getDay()+5];
}

showCurrentDate();


/* GET TEMP */
function forecast(zipCode){
    const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + ',us&units=imperial&appid=9479da382fe4e6454b2b21f3e81c03d7'; //Preston = 83263
    fetch(forecastURL)
      .then((responseF) => responseF.json())
      .then((forecastObject) => {
        // console.log(forecastObject);
        
        for (let i=1; i<6; i++){
            document.getElementById("temp-"+ i).innerHTML = Math.ceil(forecastObject.list[i].main.temp) + '&deg;F';
        }
    
    
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
