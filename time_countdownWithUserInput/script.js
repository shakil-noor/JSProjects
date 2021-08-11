let showTime = document.getElementById('showTime');
var totalSecond = 0;

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const min = e.target.querySelector('input[id=min]').value;
    const sec = e.target.querySelector('input[id=sec]').value;
    

    const minSecond = min * 60;
    var totalSecond = Number(minSecond)+ Number(sec);

    const countDown = setInterval(()=>{
        totalSecond--;
        displayTime(totalSecond);
        if(totalSecond == 0){
            showTime.innerHTML = 'Time out';
            play();
            clearInterval(countDown);
        }
    },1000);
    
    function displayTime(second){
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        showTime.innerHTML = `${min<10 ? '0':''}${min}:${sec<10 ? '0': ''}${sec}`;
    }
    
});

function play() {
    var audio = new Audio('mixkit-police-whistle-614.wav');
    audio.play();
  }
