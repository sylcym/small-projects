'use strict';

const dateEl = document.querySelector('h1');
const hourEl = document.querySelector('p');

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const fullDate = new Date();
const date = fullDate.getDate();
const day = weekDays[fullDate.getDay()];
const year = fullDate.getFullYear();

dateEl.textContent = `${day} ${date}, ${year}`;

function showTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.textContent = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

  setInterval(showTime, 1000);
}

showTime();
