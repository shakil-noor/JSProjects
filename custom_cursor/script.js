const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e) =>{
	cursor.style.left = e.pageX + 'px';
	cursor.style.top = e.pageY + 'px';
	//console.log(e.pageX, e.pageY);
	//console.log(cursor.offsetTop);
	cursor.setAttribute('cursor-fromTop',(cursor.offsetTop - scrollY) );
});

window.addEventListener('scroll',()=>{

	const fromTop = parseInt(cursor.getAttribute('cursor-fromTop'));
	cursor.style.top = scrollY + fromTop + 'px';
})