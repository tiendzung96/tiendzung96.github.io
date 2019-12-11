function templeData() {
    const templeJSON = 'json/temple.json';
    fetch(templeJSON)
        .then((response) => response.json())
        .then((templeObject) => {
            templeList = templeObject.templesList;
            console.log(templeList);
            
            getTempleData(0, "barranquilla-colombia");
            getTempleData(1, "laie-hawaii");
            getTempleData(2, "logan-utah");
            getTempleData(3, "rome-italy");

            
            function getTempleData(i, templeName){

                const addressArr = templeList[i].address.split(", ");
                let address = "";
                for (a = 0; a < addressArr.length; a++){
                    address += "<p>"+ addressArr[a] +"</p>";
                }

                let phoneLink = '<a href="tel:'+ templeList[i].phone +'">'+ templeList[i].phone + '</a>';

                let service = "<p>" + templeList[i].service.rental + "</p><p>" + templeList[i].service.cafeteria + "</p><p>" + templeList[i].service.housing + "</p><p>" + templeList[i].service.discCenter + "</p>";
                
                const ordinancesObject= templeList[i].schedule.ordinance;

                function defineOrdinance (ordinanceArr){
                    let ordinanceObj = "";
                    for (b = 0; b < ordinanceArr.length; b++){
                        ordinanceObj += "<li>" + ordinanceArr[b] + "</li>";
                    }
                    return ordinanceObj;
                };

                const baptism = defineOrdinance(ordinancesObject.baptism);

                const endownment = defineOrdinance(ordinancesObject.endownment);

                const sealing = defineOrdinance(ordinancesObject.sealing);

                let templeClosure = "";
                for (c = 0; c < templeList[i].schedule.templeClosures.length; c++){
                    templeClosure += "<li>" + templeList[i].schedule.templeClosures[c] + "</li>";
                }

                document.querySelector("." + templeName + "-address").innerHTML = address;
                document.querySelector("." + templeName + "-phone").innerHTML = phoneLink;
                document.querySelector("." + templeName + "-service").innerHTML = service;
                document.querySelector("." + templeName + "-baptism").innerHTML = baptism;
                document.querySelector("." + templeName + "-endownment").innerHTML = endownment;
                document.querySelector("." + templeName + "-sealing").innerHTML = sealing;
                document.querySelector("." + templeName + "-closure").innerHTML = templeClosure;
            }
                
        });
};

templeData();

// document.querySelector(".main-content").innerHTML += '<section class = "temple-container"><h2>' + name + '</h2><div class ="temple-info"><img src="'+ imgSRC +'" alt="'+ name +'"><div class = "temple-data"><h3>Address</h3>'+ address +'<h3>Phone Number</h3>'+ phoneLink +'<h3>Service</h3>'+ service +'<h3>Ordinace Schedule</h3><h4>Baptism</h4><ul>'+ baptism +'</ul><h4>Endownment</h4><ul>'+ endownment +'</ul><h4>Sealing</h4><ul>' + sealing + ' </ul><h3>Temple Closure</h3><ul>' + templeClosure + '</ul></div></div></section>'