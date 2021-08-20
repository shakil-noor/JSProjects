const clockEl = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button'); //get all the button
let format;

setInterval(generateTime,1000);

function generateTime(){
    format = clockEl.getAttribute('data-format'); //get the time format form div
    const newDate = new Date;
    
    const secPos = newDate.getSeconds() ;
    const minPos = newDate.getMinutes();
    let hourPos = newDate.getHours();
    const timeStatus = (hourPos>12)?'PM':'AM'; //check time format if it is AM or PM

    //if time selected time format is 12
    if(format === '12'){
        hourPos = (hourPos>12)?hourPos%12:hourPos;
    }

    //Add 0 before the hour, min and sec if it is less then 10
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // Show the time on inner HTML
    clockEl.innerHTML = `${formatTime(hours)} : ${formatTime(min)} : ${formatTime(secPos)} ${timeStatus}`
}

// Add event listener at every button
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        format = button.getAttribute('data-format'); //get the data from button
        clockEl.setAttribute('data-format',format); //set time format on the div
        generateTime();
    })
})