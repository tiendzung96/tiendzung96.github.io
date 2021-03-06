function liveCover(x) {
    var time = new Date();
    var h = time.getHours();
    //TESTING LOG
    // var h = 6; //6am sunrise
    // var h = 10; //10am daytime
    // var h = 18; //6pm sunset
    // var h = 1; //1am starry night

    if (x.matches) { // If media query matches
        // console.log(h);
        if(h>=5 && h<9){ //SUNRISE PANO--------------------- 5am-9am
            document.getElementById("heroimg").classList.remove("sunrise");
            document.getElementById("heroimg").classList.add("sunrise-pano");
        } else if(h>=9 && h<17){ //DAYTIME PANO--------------------- 9am-5pm
            document.getElementById("heroimg").classList.remove("daytime");
            document.getElementById("heroimg").classList.add("daytime-pano");
        } else if(h>=17 && h<=20){ //SUNSET PANO--------------------- 5pm-8pm
            document.getElementById("heroimg").classList.remove("sunset");
            document.getElementById("heroimg").classList.add("sunset-pano");
        } else{ //NIGHT PANO--------------------- 8pm-5am
            document.getElementById("heroimg").classList.remove("night");
            document.getElementById("heroimg").classList.add("night-pano");
        }
        
    } else{
        if(h>=5 && h<9){ //SUNRISE--------------------- 5am-8am
            document.getElementById("heroimg").classList.remove("sunrise-pano");
            document.getElementById("heroimg").classList.add("sunrise"); 
        } else if(h>=9 && h<=17){ //DAYTIME--------------------- 8am-5pm
            document.getElementById("heroimg").classList.remove("daytime-pano");
            document.getElementById("heroimg").classList.add("daytime"); 
        } else if(h>17 && h<=20){ //SUNSET--------------------- 5pm-8pm
            document.getElementById("heroimg").classList.remove("sunset-pano");
            document.getElementById("heroimg").classList.add("sunset"); 
        } else{ //NIGHT--------------------- 8pm-5am
            document.getElementById("heroimg").classList.remove("night-pano");
            document.getElementById("heroimg").classList.add("night"); 
        } 
    }
  }
  var x = window.matchMedia("(min-width: 55em)");
  liveCover(x); // Call listener function at run time
  x.addListener(liveCover); // Attach listener function on state changes
