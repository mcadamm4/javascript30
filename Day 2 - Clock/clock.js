const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

var offset = new Date().getTimezoneOffset();
console.log(offset);

function setDate() {
    const now = new Date();
    const hours = now.getHours() - 1; //For offset
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hoursDegrees = ((hours/12) * 360) + 90;
    const minutesDegrees = ((minutes/60) * 360) + 90;
    const secondsDegrees = ((seconds/60) * 360) + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log("Hour: " + hours + " Minute: " + minutes + " Second: " + seconds);
}

setInterval(setDate, 1000);
