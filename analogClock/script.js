const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

setInterval(()=>{
    const newDate = new Date;
    
    const setSecPos = newDate.getSeconds() /60 * 360 ;
    const minPos = newDate.getMinutes() /60 * 360;
    const hourPos = newDate.getHours() /12 * 360;
    
    secEl.style.transform = `rotate(${setSecPos}deg)`
    minEl.style.transform = `rotate(${minPos}deg)`
    hourEl.style.transform = `rotate(${hourPos}deg)`
},1000);
