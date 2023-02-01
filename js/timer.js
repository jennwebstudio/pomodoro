import { alarm } from "./alarm.js";
import { changeActiveBtn } from "./control.js";
import { state } from "./state.js";
import { addZero } from "./utils.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

export const showTime = (seconds) => {
  minutesElem.textContent = Math.floor(seconds / 60)
    .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматирование
  secondsElem.textContent = addZero((seconds % 60));  // форматирование через функцию
};

export const startTimer = () => {
  state.timeLeft -= 3;
  
  showTime(state.timeLeft);            // отобразить на странице

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  } 

  if (state.timeLeft <= 0) {

    alarm();     // время вышло
    console.log(state.activeTodo);

    if (state.status === 'work') {
      state.activeTodo.pomodoro += 1;

      if (state.activeTodo.pomodoro % state.count) {
        state.status = 'break';
      } else {
        state.status = 'relax';
      }
      
    } else {
      state.status = 'work';
    }
    state.timeLeft = state[state.status] * 60;
    changeActiveBtn(state.status);
    startTimer();
  }

};