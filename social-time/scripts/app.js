const DOMstrings = {
    facebookCheck: '#facebook',
    engagementLvl: '#engagementLevel',
    inputBtn: '.inputBtn',
    engagementContainer: '.engagement-time-container',
    postingContainer: '.posting-tips-container',
    referenceContainer: '.reference-container',
    socialMediaInput: '.radio-group'
};

const socialTimeURL = 'https://raw.githubusercontent.com/tiendzung96/tiendzung96.github.io/master/social-time/social-time-11-2019.json';

fetch(socialTimeURL)
.then((response) => response.json())
.then((socialTimeObject) => {
// console.log(socialTimeObject);
const engagementObject = socialTimeObject.engagementTime;
const tipsObject = socialTimeObject.socialMediaTips;

console.log(tipsObject);

    //DATA CONTROLLER
    const DataController =(function(){
           
        return{
            getDay: function(){
                var opt, sel;
                sel = document.getElementById('weekDay');
                for ( var i = 0; i < sel.options.length; i++ ) {
                    opt = sel.options[i];
                    if (opt.selected) {
                        break;
                    }
                }
                return opt.value;
                
            },
            getSocialMedia: function(){
                let value, form, name;
                // get list of radio buttons with specified name
                form = document.getElementById('form');
                name = 'social-media';
                var radios = form.elements[name];
                
                // loop through list of radio buttons
                for (var i=0, len=radios.length; i<len; i++) {
                    if ( radios[i].checked ) { // radio checked?
                        value = radios[i].value; // if so, hold its value in value
                        break; // and break out of for loop
                    }
                }
                return value; // return value of checked radio or undefined if none checked
            },
            getEngagementValue: function(){
                return document.querySelector(DOMstrings.engagementLvl).value;   
            },

            getPostingTime: function(weekDay, socialMedia, engagementLvl){
                let weekDayInt = parseInt(weekDay);
                // console.log(engagementObject);
                function getSocialMediaObject(socMedia){
                   return engagementObject.find(element => element.socialmedia === socMedia); 
                }

                let socialMediaObject = getSocialMediaObject(socialMedia);
                // console.log(socialMediaObject);
                let engagementGroupObj = socialMediaObject.engagement[engagementLvl].time;

                function getTimeInWeekDay(wkDay){
                    return engagementGroupObj.filter(element => element.weekday === wkDay); 
                }

                return getTimeInWeekDay(weekDayInt);

            }
        }

    })();
    
    //UI CONTROLLER
    const UIController = (function(){
        let convertFromMilitaryHour = function(hour){
            if (hour > 12 ){
                newHour = hour - 12 + 'pm';
            } else if (hour < 12 && hour !== 0){
                newHour = hour + 'am';
            } else {
                newHour = 12 + 'am';
            }
            return newHour;
        }

        return{
            

            displayPostingTime: function(arr, socMedia){
                let heading, section, element, weekDayStrings, newStartHour, newEndHour, socialMediaPlatform, engagementLevel;
                element = DOMstrings.engagementContainer;

                dayInput = document.querySelector('#weekDay');
                weekDayStrings = dayInput.options[dayInput.selectedIndex].text;
                // console.log (weekDayStrings);

                engagementLevel = document.getElementById('engagement-level-value').textContent;

                socialMediaPlatform = socMedia.slice(0,1).toLocaleUpperCase() + socMedia.slice(1);

                heading = '<h2>' + weekDayStrings + '\'s Posting Time</h2><p>with ' + engagementLevel + ' Engagement on ' + socialMediaPlatform + '</p>';

                section = '';

                if (arr.length === 0){
                    section += '<div><section class = "engagement-time"><p class = "no-time">There\'s no posting time today with this level of engagement.</p></section>';
                } else{
                    for (i = 0; i < arr.length; i++){
                        // console.log(arr[i]);
    
                        newStartHour= convertFromMilitaryHour(arr[i].starthour);
                        newEndHour= convertFromMilitaryHour(arr[i].endhour);
    
                        // console.log(newStartHour, newEndHour);
    
                        section += '<section class = "engagement-time"><p class = "time-of-day">'+ newStartHour + ' - ' + newEndHour + '</p></section>';
           
                    }
                }

                

                document.querySelector(element).innerHTML = heading + section + '</div>';
           
            },

            displayTips: function(socMedia, element){
                // console.log(socialMediaPlatform);
                function getSocialMediaObject(socMedia){
                    return tipsObject.find(element => element.socialmedia === socMedia); 
                }
                const socialMediaPlatform = socMedia.slice(0,1).toLocaleUpperCase() + socMedia.slice(1);

                const postingTipsArr = getSocialMediaObject(socMedia).postTips;
                 function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }
                const randomTip = postingTipsArr[getRandomInt(postingTipsArr.length)];
                const tip = randomTip.tip;
                const tipDesc = randomTip.desc;

                document.querySelector(DOMstrings.postingContainer).innerHTML = '<h2>'+ socialMediaPlatform +' Tip of the Day</h2><section class = "tips"><h3>'+ tip + '</h3>'+ tipDesc +'</section>';


            }
            
        }

    })();


    //GLOBAL APP CONTROLLER
    const controller = (function(UICtrl, DataCtrl){

        const toggleButton = function(){
            document.querySelector(DOMstrings.inputBtn).classList.remove('hidden');

        }
        
        const outputData = function(){
            // Unhide the engagement value div
            document.querySelector(DOMstrings.engagementContainer, DOMstrings.postingContainer, DOMstrings.referenceContainer).classList.remove('hidden');
            document.querySelector(DOMstrings.postingContainer).classList.remove('hidden');
            document.querySelector(DOMstrings.referenceContainer).classList.remove('hidden');
        

            let weekDay, socialMedia, engagementLvl, postingTimeObj;
            weekDay = DataCtrl.getDay();
            socialMedia = DataCtrl.getSocialMedia();
            engagementLvl = DataCtrl.getEngagementValue();
            // console.log(weekDay, socialMedia, engagementLvl);

            postingTimeObj = DataCtrl.getPostingTime(weekDay, socialMedia, engagementLvl);
            // console.log(postingTimeObj);
            UICtrl.displayPostingTime(postingTimeObj, socialMedia, engagementLevel);

            UICtrl.displayTips(socialMedia);

        }

        const setupEventListeners = function(){
            document.querySelector(DOMstrings.socialMediaInput).addEventListener('change', toggleButton)
            document.querySelector(DOMstrings.inputBtn).addEventListener('click', outputData);
            document.querySelector(DOMstrings.inputBtn).addEventListener('click', outputData);

        };
        
        return{
            init: function(){
                console.log('Application started.');
                setupEventListeners();
                
            }
        }

    })(UIController, DataController);

    controller.init();

}); 

