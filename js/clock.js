const boardClock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear());
  const months = String(date.getMonth() + 1);
  const days = String(date.getDate());
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  boardClock.innerText = `${years}.${months}.${days}
  ${hours}:${minutes}`;
}

getClock();

setInterval(getClock, 1000);