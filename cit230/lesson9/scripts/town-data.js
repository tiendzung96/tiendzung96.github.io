const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(townURL)
  .then(response => {
      response.json()
      .then(
          response => {
                const towns = response.towns;
                console.log(response.towns);

                let fishHaven = response.towns[1];
                let fishHavenName = 'fishHaven';
                getTownData(fishHaven, fishHavenName);  

                let preston = response.towns[4];
                let prestonName = 'preston';
                getTownData(preston, prestonName);  

                let sodaSprings = response.towns[5];
                let sodaSpringsName = 'sodaSprings';
                getTownData(sodaSprings, sodaSpringsName);  

                function getTownData (town, townName) {
                    document.querySelector('#'+ townName + 'Img').setAttribute('src', 'images/town/edited/' + town.photo);
                    document.querySelector('#'+ townName + 'Motto').textContent = '"'+town.motto+'"';
                    document.querySelector('#'+ townName + 'Year').textContent = town.yearFounded;
                    document.querySelector('#'+townName+'Population').textContent = town.currentPopulation;
                    document.querySelector('#'+townName+'Rain').textContent = town.averageRainfall;
                }
          }
      )
  });