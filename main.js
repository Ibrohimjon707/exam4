function updateClock() {
    const now = moment();
    const time = now.format('HH:mm:ss');
    const date = now.format('DD:MM:YYYY',"Yil");
    document.querySelector('.clock').textContent = time;
    document.querySelector('.date').textContent = date;
  }

  setInterval(updateClock, 1000);
  updateClock();