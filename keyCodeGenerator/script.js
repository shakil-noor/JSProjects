const displayKey = document.querySelector('.key h2');
const keyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keydown',(e)=>{
    overlay.classList.add('hide');
    displayKey.innerText = e.key;
    keyCode.innerText = e.keyCode;

    if(e.keyCode === 32){
        displayKey.innerText = `Space`;
    }
});

keyCodeDiv.addEventListener('click',(e)=>{
    const textInput = document.createElement('textarea');
    textInput.setAttribute('readonly','');
    textInput.value = keyCodeDiv.querySelector('h2').innerText;
    document.body.appendChild(textInput);

    textInput.select();
    document.execCommand("copy");
    document.body.removeChild(textInput);

    keyCodeDiv.querySelector('p').innerText = 'Copied';
    setTimeout(()=>{
        keyCodeDiv.querySelector('p').innerText = 'Click to copy';
    },3000);
})