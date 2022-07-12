const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");




const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor (totalSeconds / 3600 / 24);

    const hours =  Math.floor (totalSeconds /3600) % 24;

    const minutes =  Math.floor (totalSeconds /60) % 60;

    const seconds = Math.floor (totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes; 
    secondsEL.innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);