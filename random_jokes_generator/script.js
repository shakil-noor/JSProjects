const btn = document.querySelector('.container button');
const jokeText = document.getElementById('jokeText');

document.addEventListener('DOMContentLoaded',getJoke);

btn.addEventListener('click',getJoke);

// function getJoke(){
// 	const joke = fetch('https://icanhazdadjoke.com/',{
// 		headers:{
// 			"Accept":'application/json'
// 		}
// 	}).then(data => data.json())
// 	  .then(obj => jokeText.innerHTML = obj.joke)

// 	  console.log(joke);
// }

async function getJoke(){
	const jokeData = await fetch('https://icanhazdadjoke.com/',{
		headers:{
			"Accept":'application/json'
		}
	});
	const jokeObj = await jokeData.json();
	jokeText.innerHTML = jokeObj.joke;

	//console.log(jokeObj);
}

