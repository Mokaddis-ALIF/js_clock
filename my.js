const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);

	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
// const secondHand = document.querySelector('.second-hand');
// const minHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
// 	const now = new Date();
// 	const second = now.getSeconds()
// 	const secondDegree = ((second / 60) * 360) + 90
// 	const minutes = now.getMinutes()
// 	const minutesDegrees = ((minutes / 60) * 360) + 90
// 	const hour = now.getHours()
// 	const hoursDegrees = ((hour / 12) * 360) + 90
// 	console.log(second, minutes, hour);
// 	secondHand.style.transform = `rotate(${secondDegree}deg)`
// 	minHand.style.transform = `rotate(${minutesDegrees}deg)`
// 	minHand.style.backgroundColor = 'red'
// 	hourHand.style.transform = `rotate(${hoursDegrees}deg)`
// 	hourHand.style.backgroundColor = 'orange'
// }

// setInterval(setDate, 1000)