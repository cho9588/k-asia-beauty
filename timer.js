function startTimer(duration, display) {
  var timer = duration, hours, minutes, seconds;
  setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}


window.onload = function () {
  var product1Timer = 86400,
      product2Timer = 3600, 
      product3Timer = 65400,
      product4Timer = 37400,
      display1 = document.getElementById('timer1'), 
      display2 = document.getElementById('timer2'); 
      display3 = document.getElementById('timer3'), 
      display4 = document.getElementById('timer4'), 

  startTimer(product1Timer, display1);
  startTimer(product2Timer, display2);
  startTimer(product3Timer, display3);
  startTimer(product4Timer, display4);
};