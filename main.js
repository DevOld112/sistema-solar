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
});