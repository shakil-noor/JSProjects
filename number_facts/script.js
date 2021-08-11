const form = document.getElementById('form');
const numFact = document.getElementById('numberFacts');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type=number]').value;
    const loadText = 'Wait for a little bit...';
    numFact.innerHTML = loadText;
    const baseUrl = 'http://numbersapi.com/';

    fetch(baseUrl + number)
        .then(response => response.text())
        .then(text =>numFact.innerHTML = text);
})