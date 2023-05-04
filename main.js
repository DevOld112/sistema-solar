document.addEventListener('DOMContentLoaded', function() {

// Selecciona el elemento con clase "stars"
const stars = document.querySelector('.stars');

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

// Interactividad con el Sistema Solar

// Sol

const sol = document.querySelector('.sun');
const ventanaEmergenteSol = document.getElementById('ventana-emergente-sol')
const cerrarVentanaSol = document.getElementById('cerrar-ventana-sol')

sol.addEventListener('click', () => {
  ventanaEmergenteSol.classList.remove('oculto');
})

cerrarVentanaSol.addEventListener('click', () => {
  ventanaEmergenteSol.classList.add('oculto')
})


// Venus // 

const venus = document.querySelector('.venus');
const ventanaEmergenteVenus = document.getElementById('ventana-emergente-venus');
const cerrarVentanaVenus = document.getElementById('cerrar-ventana-venus');

venus.addEventListener('click', () => {
  ventanaEmergenteVenus.classList.remove('oculto');
});

cerrarVentanaVenus.addEventListener('click', () => {
  ventanaEmergenteVenus.classList.add('oculto');
});


//Tierra

const tierra = document.querySelector('.earth');
const ventanaEmergenteTierra = document.getElementById('ventana-emergente-tierra')
const cerrarVentanaTierra = document.getElementById('cerrar-ventana-tierra');

tierra.addEventListener('click', () => {
  ventanaEmergenteTierra.classList.remove('oculto')
});

cerrarVentanaTierra.addEventListener('click', () =>{
  ventanaEmergenteTierra.classList.add('oculto');
})

});




