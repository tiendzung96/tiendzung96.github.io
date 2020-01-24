let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentYear").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()]+ " " + currentDate.getDate() + ", " + currentYear;

// PANCAKE BANNER

// if (days[currentDate.getDay()] === "Friday"){
//     document.getElementById("pancakes").classList.remove("hidden");
// }