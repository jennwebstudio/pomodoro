import { alarm } from "./alarm.js";
import { state } from "./state.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

const showTime = (seconds) => {
  minutesElem.textContent = Math.floor(seconds / 60)
    .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматирование
  secondsElem.textContent = (seconds % 60)
    .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
};

export const startTimer = () => {
  state.timeLeft -= 1;
  
  showTime(state.timeLeft);            // отобразить на странице

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  } 

  if (state.timeLeft <= 0) {

    alarm();     // время вышло
    
  }

};