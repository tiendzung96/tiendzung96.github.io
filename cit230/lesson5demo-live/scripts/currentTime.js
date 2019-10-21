function showCurrentTime(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    function twoDigits(){
    h = (h < 10) ?  "0" + h : h;
    m = (m < 10) ?  "0" + m : m;
    s = (s < 10) ?  "0" + s : s;
    }

    if(h==0){
        h=12;
        twoDigits();
        var currentTime = h + ":" + m + ":" + s + " AM";
    } else if(h == 12){
        twoDigits();
        var currentTime = h + ":" + m + ":" + s + " PM";
    } else if(h > 12){
        h = h - 12;
        twoDigits();
        var currentTime = h + ":" + m + ":" + s + " PM";
    } else{
        var currentTime = h + ":" + m + ":" + s + " AM";
    }

    

    document.getElementById("digital-clock").innerText = currentTime;
    setTimeout(showCurrentTime, 1000);

}

showCurrentTime();

