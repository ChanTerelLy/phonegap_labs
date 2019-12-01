var ball = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function playSound() {
  let x = document.getElementById("audio1");
  x.play();
}

// • Функцию, которая будет вызываться при изменении положения устройства, и получение значений углов
function handleOrientation(event) {
  var x = event.beta;
  var y = event.gamma;
  let z = event.alpha;
  // var col = document.getElementsByClassName("ball");
  // • Вывод значений углов


  // • Настройки, чтобы шарик не вылетал за границы
  // • Сдвиг для удобства вычислений 
  x += 90;
  y += 90;
  z += 90;

  ball.style.top = (maxX * x / 180 - 10) + "px";
  ball.style.left = (maxY * y / 180 - 10) + "px";

  output.innerHTML = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
  output.innerHTML += "alpha: " + z + "\n";

  ball.style.background = 'yellow';
  output.innerHTML += "alpha: " + x + "\n";
  // PlaySound("sound1");
  if( x < 100 && x > 80){
    ball.style.background = 'green';
    playSound()
  }

}
window.addEventListener('deviceorientation', handleOrientation);