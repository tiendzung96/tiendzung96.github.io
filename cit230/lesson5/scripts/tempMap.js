

// https://tile.openweathermap.org/map/temp_new/4/2/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed
// https://tile.openweathermap.org/map/temp_new/4/3/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed
// https://tile.openweathermap.org/map/temp_new/4/4/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed

// https://tile.openweathermap.org/map/temp_new/4/2/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed
// https://tile.openweathermap.org/map/temp_new/4/3/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed
// https://tile.openweathermap.org/map/temp_new/4/4/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed



const tempMapURL = [
    'https://tile.openweathermap.org/map/temp_new/4/2/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed',
    'https://tile.openweathermap.org/map/temp_new/4/3/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed',
    'https://tile.openweathermap.org/map/temp_new/4/4/5.png?appid=916391df257d2b1df7c9e66d47ecf2ed',

    'https://tile.openweathermap.org/map/temp_new/4/2/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed',
    'https://tile.openweathermap.org/map/temp_new/4/3/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed',
    'https://tile.openweathermap.org/map/temp_new/4/4/6.png?appid=916391df257d2b1df7c9e66d47ecf2ed'

];

// // TESTING
// const tempMapURL = [
//     'images/test-weathermap/0.png',
//     'images/test-weathermap/1.png',
//     'images/test-weathermap/2.png',
//     'images/test-weathermap/3.png',
//     'images/test-weathermap/4.png',
//     'images/test-weathermap/5.png'
// ]

let tempimg = '<img src="' + tempMapURL[0] + '">';

// for (let i = 1; i < tempMapURL.length; i++){
//     tempimg += '<img src="' + tempMapURL[i] + '">';

// }

for (let i = 1; i < tempMapURL.length; i++){
    tempimg += '<img src="' + tempMapURL[i] + '">';

}

document.getElementById('weather-map').innerHTML = tempimg;