const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const weekDay = document.getElementById("weekday");
const fullDate = document.getElementById("date");
const dayNightCycle = document.getElementById("daynight");
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  let hours = new Date().getHours();
  if (hours > 12) {
    hours = hours - 12;
    if (hours < 10) {
      hoursText.innerText = "0" + hours;
      dayNightCycle.innerText = "PM";
    } else {
      hoursText.innerText = hours;
    }
  } else {
    hoursText.innerText = hours;
    dayNightCycle.innerText = "AM";
  }
  if (new Date().getMinutes() < 10) {
    minutesText.innerText = "0" + new Date().getMinutes();
  } else {
    minutesText.innerText = new Date().getMinutes();
  }

  if (new Date().getSeconds() < 10) {
    secondsText.innerText = "0" + new Date().getSeconds();
  } else {
    secondsText.innerText = new Date().getSeconds();
  }
  let dayOfTheWeekNumber = new Date().getDay();
  weekDay.innerText = daysOfWeek[dayOfTheWeekNumber];
  fullDate.innerText =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear();
  // make am or pm cycle !!!
}, 1000);
