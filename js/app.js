const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

 // gets the various information from the current date
 var date = new Date();
 let hr = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();

 // computes the correct position for each hand of the clock
 let hrPosition = (hr*360/12)+(min*(360/60)/12);
 let minPosition = (min*360/60)+(sec*(360/60)/60);
 let secPosition = sec*360/60;

// loops through the program so the clock hands rotate continuously
function tickTock() {

    // computes the positions of the hands
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    
    // rotates the hands of the clock to match with the current time
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(tickTock, 1000);