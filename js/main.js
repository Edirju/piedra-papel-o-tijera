let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosUsuario = document.querySelector('#puntos-usuario');
let contenedorPuntosPC = document.querySelector('#puntos-computadora');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector('#gana-punto');
let elegiTuArma = document.querySelector('#elegi-tu-arma')

let contenedorEleccionUsuario = document.querySelector('#eleccion-usuario')
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll('.arma')

botonesArmas.forEach(boton => {
  boton.addEventListener('click', iniciarTurno)
})

function iniciarTurno(e) {
  let eleccionPC = Math.floor(Math.random() * 3);
  let eleccionUsuario = e.currentTarget.id;
  // Instrucciones: piedra => 0, papel => 1, tijera => 2
  if (eleccionPC === 0) {
    eleccionPC = 'piedra🪨'
  }else if (eleccionPC === 1){
    eleccionPC = 'papel📄'
  } else if(eleccionPC === 2){
    eleccionPC = 'tijera✂️'
  }
  // Reglas: piedra vence a tijera, tijera vence a papel, papel vence a piedra, si son iguales es empate.
  if (
    (eleccionUsuario === 'piedra🪨' && eleccionPC === 'tijera✂️') ||
    (eleccionUsuario === 'tijera✂️' && eleccionPC === 'papel📄') ||
    (eleccionUsuario === 'papel📄' && eleccionPC === 'piedra🪨')
  ) {
    ganaUsuario();
  }else if (
    (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
    (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📄") ||
    (eleccionPC === "papel📄" && eleccionUsuario === "piedra🪨")
  ) {
    ganaPC();
  }else{
    empate();
  }
  mensaje.classList.remove('disabled')
  contenedorEleccionUsuario.textContent = eleccionUsuario
  contenedorEleccionPC.textContent = eleccionPC

  if (puntosUsuario === 5 || puntosPC === 5) {
    if (puntosUsuario === 5) {
      instrucciones.textContent = '🏆✨¡Eres el ganador!✨🏆'
    }  
    if (puntosPC === 5) {
      instrucciones.textContent = '😭¡La PC ganó el juego!😭'
    } 
    elegiTuArma.classList.add('disabled')   
    reiniciar.classList.remove('disabled')
    reiniciar.addEventListener('click', reiniciarJuego)
  }

}

function ganaUsuario() {
  puntosUsuario++
  contenedorPuntosUsuario.textContent = puntosUsuario
  contenedorGanaPunto.textContent = "🔥¡Has ganado un punto!🔥";
}

function ganaPC() {
  puntosPC++
  contenedorPuntosPC.textContent = puntosPC;
  contenedorGanaPunto.textContent = "🤖¡La PC ganó un punto!🤖";
}

function empate() {
  contenedorGanaPunto.textContent = "😱😣¡Empate!😣😱";
}

function reiniciarJuego() {
  reiniciar.classList.add('disabled')
  elegiTuArma.classList.remove('disabled')
  mensaje.classList.add('disabled')

  puntosUsuario = 0
  puntosPC = 0

  contenedorPuntosUsuario.textContent = puntosUsuario
  contenedorPuntosPC.innerText = puntosPC

  instrucciones.innerText = "Gana el primero que obtenga 5 puntos.";
}


