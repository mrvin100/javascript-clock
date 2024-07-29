clock();

function clock(){
	const date = new Date(),
		  hours = ((date.getHours() + 11) % 12 + 1),
		  minutes = date.getMinutes(),
		  seconds = date.getSeconds(),
		  hour = hours * 30,
		  minute = minutes * 6,
		  second = seconds * 6;
	
	document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
	document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
	document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);
