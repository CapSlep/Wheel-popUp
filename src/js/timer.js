const formatNumber = (num) => {
  return num.toString().padStart(2, '0');
}

const lsResolveTimer = (seconds) => {
  const lsTimer = localStorage.getItem("ls_timer");
  const timer = lsTimer != null ? parseInt(lsTimer) : ((new Date().getTime() / 1000) + seconds);

  if (lsTimer == null) {
    localStorage.setItem("ls_timer", timer);
  }

  return timer;
}

let nHours;
let nMinutes;
let nSeconds;

const initObjs = () => {
  const hours = 0;
  const minutes = 26;

  const initSeconds = (hours * 60 * 60) + (minutes * 60);

  let timer = lsResolveTimer(initSeconds);
  const nowTimestamp = new Date().getTime() / 1000;

  let timerSeconds = timer - nowTimestamp;

  console.log(timerSeconds);

  if (timerSeconds < 0) {
    timer = ((new Date().getTime() / 1000) + initSeconds);
    localStorage.setItem("ls_timer", timer);

    timerSeconds = timer - nowTimestamp;
  }

  nHours = Math.floor(timerSeconds / 60 / 60);
  nMinutes = Math.floor(timerSeconds / 60);
  nSeconds = Math.floor(timerSeconds % 60);
}

const timerInit = () => {
  const hoursEl = document.querySelector("#timerHour");
  const minutesEl = document.querySelector("#timerMin");
  const secondsEl = document.querySelector("#timerSec");

  document.querySelector("#timerText").innerText = window.__config.mainProduct.timer;

  initObjs();

  const setNumbers = () => {
    hoursEl.innerText = formatNumber(nHours);
    minutesEl.innerText = formatNumber(nMinutes);
    secondsEl.innerText = formatNumber(nSeconds);
  }
  

  setInterval(() => {
    if (nSeconds === 0) {
      nSeconds = 59;
      
      if (nMinutes === 0) {
        nMinutes = 59;

        if (nHours === 0) {
          initObjs();
        } else {
          nHours--;
        }
        
      } else {
        nMinutes--;
      }

    } else {
      nSeconds--;
    }

    setNumbers();
  }, 1000);
}