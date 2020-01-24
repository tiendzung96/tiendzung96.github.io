const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function fetchTownEvents(townName,townNameString){
    fetch(townURL)
  .then(response => {
      response.json()
      .then(
          response => {
            const towns = response.towns;

            const townObj = getTownObject(townNameString);

            upcomingEvents (townObj,townName);

            function getTownObject(name){
                return towns.find(element => element.name === name);
            }

            function upcomingEvents(townObj, townName){
                document.querySelector('#'+ townName + '-upcoming-events-desc').innerHTML ='';
                for (i = 0; i < townObj.events.length; i ++){
                    var string = townObj.events[i].split(":");
                    document.querySelector('#'+ townName + '-upcoming-events-desc').innerHTML += '<p><strong>' + string[0] + ':</strong>' + string[1] + '</p>';

                }
            }
          }
      )
  });
}

// fetchTownEvents(preston,'preston', 'Preston');