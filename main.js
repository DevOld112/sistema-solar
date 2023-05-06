document.addEventListener('DOMContentLoaded', function() {

  const audio = document.getElementById("myAudio");
  audio.volume = 0.05;


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
  ventanaEmergenteSol.classList.add('ventana-emergente');
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
  ventanaEmergenteVenus.classList.add('ventana-emergente');
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
  ventanaEmergenteTierra.classList.add('ventana-emergente');
});

cerrarVentanaTierra.addEventListener('click', () =>{
  ventanaEmergenteTierra.classList.add('oculto');
})

// Marte


const marte = document.querySelector('.mars');
const ventanaEmergenteMarte = document.getElementById('ventana-emergente-marte')
const cerrarVentanaMarte = document.getElementById('cerrar-ventana-marte')

marte.addEventListener('click', () => {
  ventanaEmergenteMarte.classList.remove('oculto')
  ventanaEmergenteMarte.classList.add('ventana-emergente');
 
})

cerrarVentanaMarte.addEventListener('click', () =>{
  ventanaEmergenteMarte.classList.add('oculto')
}) 

//Jupiter

const jupiter = document.querySelector('.jupiter');
const ventanaEmergenteJupiter = document.getElementById('ventana-emergente-jupiter')
const cerrarVentanaJupiter = document.getElementById('cerrar-ventana-jupiter')

jupiter.addEventListener('click', () => {
  ventanaEmergenteJupiter.classList.remove('oculto')
  ventanaEmergenteJupiter.classList.add('ventana-emergente');
})

cerrarVentanaJupiter.addEventListener('click', () => {
  ventanaEmergenteJupiter.classList.add('oculto')
})

//Saturno

const saturno = document.querySelector('.saturno');
const ventanaEmergenteSaturno = document.getElementById('ventana-emergente-saturno')
const cerrarVentanaSaturno = document.getElementById('cerrar-ventana-saturno');

saturno.addEventListener('click', () => {
  ventanaEmergenteSaturno.classList.remove('oculto')
  ventanaEmergenteSaturno.classList.add('ventana-emergente');
})

cerrarVentanaSaturno.addEventListener('click',() => {
  ventanaEmergenteSaturno.classList.add('oculto')
})

//Urano

const urano = document.querySelector('.urano');
const ventanaEmergenteUrano = document.getElementById('ventana-emergente-urano');
const cerrarVentanaUrano = document.getElementById('cerrar-ventana-urano');

urano.addEventListener('click', () => {
  ventanaEmergenteUrano.classList.remove('oculto')
  ventanaEmergenteUrano.classList.add('ventana-emergente');
});

cerrarVentanaUrano.addEventListener('click', () => {
  ventanaEmergenteUrano.classList.add('oculto')
})


//Agradecimientos especiales

const sirius = document.querySelector('.sirius');
const ventanaEmergenteSirius = document.getElementById('ventana-emergente-sirius')
const cerrarVentanaSirius = document.getElementById('cerrar-ventana-sirius')

sirius.addEventListener('click', () => {
  ventanaEmergenteSirius.classList.remove('oculto')
  ventanaEmergenteSirius.classList.add('ventana-emergente');
})

cerrarVentanaSirius.addEventListener('click', () =>{
  ventanaEmergenteSirius.classList.add('oculto')
})

const betelgeuse = document.querySelector('.betelgeuse');
const ventanaEmergenteBetelgeuse = document.getElementById('ventana-emergente-betelgeuse')
const cerrarVentanaBetelgeuse = document.getElementById('cerrar-ventana-betelgeuse')


betelgeuse.addEventListener('click', () => {
  ventanaEmergenteBetelgeuse.classList.remove('oculto')
  ventanaEmergenteBetelgeuse.classList.add('ventana-emergente');
})
cerrarVentanaBetelgeuse.addEventListener('click', () =>{
  ventanaEmergenteBetelgeuse.classList.add('oculto')
})



const aldebaran = document.querySelector('.aldebaran');
const ventanaEmergenteAldebaran = document.getElementById('ventana-emergente-aldebaran');
const cerrarVentanaAldebaran = document.getElementById('cerrar-ventana-aldebaran');

aldebaran.addEventListener('click', () =>{
  ventanaEmergenteAldebaran.classList.remove('oculto')
  ventanaEmergenteAldebaran.classList.add('ventana-emergente');
})

cerrarVentanaAldebaran.addEventListener('click', () => {
  ventanaEmergenteAldebaran.classList.add('oculto')
})

const rigel = document.querySelector('.rigel')
const ventanaEmergenteRigel = document.getElementById('ventana-emergente-rigel');
const cerrarVentanaRigel = document.getElementById('cerrar-ventana-rigel');

rigel.addEventListener('click', () => {
  ventanaEmergenteRigel.classList.remove('oculto');
  ventanaEmergenteRigel.classList.add('ventana-emergente');

  cerrarVentanaRigel.addEventListener('click', () => {
    ventanaEmergenteRigel.classList.add('oculto')
  })
})

});





