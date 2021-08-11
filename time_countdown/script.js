let timeH = document.querySelector('h1');
let timeSecond = 11;

//timeH.innerHTML = `00:${timeSecond}`;
displayTime(timeSecond);

const countDown = setInterval(()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond == 0){
        timeH.innerHTML = 'Time out';
        clearInterval(countDown);
    }
},1000);

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${min<10 ? '0':''}${min}:${sec<10 ? '0': ''}${sec}`;
}


