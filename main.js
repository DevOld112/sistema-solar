document.addEventListener('DOMContentLoaded', function() {

// Selecciona el elemento con clase "stars"
const stars = document.querySelector('.stars');

// Función para generar un número aleatorio
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crea múltiples elementos div con clase "star" y los agrega al elemento con clase "stars"
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = randomNum(0, 100) + '%';
  star.style.top = randomNum(0, 100) + '%';
  star.style.width = randomNum(1, 3) + 'px';
  star.style.height = star.style.width;
  stars.appendChild(star);
}

const sol = document.querySelector('.sun');

sol.addEventListener('click', (event) => {
  const solClickeado = event.target;
  alert (`El Sol es la estrella más próxima a la Tierra y se encuentra a una distancia promedio de 150 millones de kilómetros. Es la principal fuente primaria de luz y calor para la Tierra.`)
})

const tierra = document.querySelector('.earth');
const tierraStyle = window.getComputedStyle(tierra, '::before');

tierra.addEventListener('click', (event) => {
  const tierraClickeado = event.target;
  alert (tierraStyle.getPropertyValue('content'));
})

const jupiter = document.querySelector('.jupiter');
const jupiterStyle = window.getComputedStyle(jupiter, '::before')

jupiter.addEventListener('click', (event) => {
    const jupiterClickeado = event.target;
    alert(jupiterStyle.getPropertyValue('content'))
})


});




