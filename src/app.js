import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  //Declarar variables
  const iconos = ['♦', '♥', '♠', '♣'];
  const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  //incluimos todos los valores existentes del array
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //generar la carta atleatoria
  function obtenerCartaAleatoria() {
    const indiceIcono = getRandomIntInclusive(0, iconos.length - 1);
    const indiceNumero = getRandomIntInclusive(0, numeros.length - 1);

    const carta = {
      numero: numeros[indiceNumero],
      icono: iconos[indiceIcono]
    };
    return carta;
  }
  //asignamos a los iconos el color que les corresponde y en que caso debe cambiar dicho color
  function obtenerCartaConColor(carta) {
    let color = "negro";
    if (carta.icono === '♦' || carta.icono === '♥') {
      color = "rojo";
    }
    return { ...carta, color: color };
  }
  //asignamos el codigo que queremois que se aplique en los distintos componentes del html
  const cartaDiv = document.getElementById("carta");
  const iconoArriba = cartaDiv.querySelector(".icono-arriba");
  const numeroCentro = cartaDiv.querySelector(".numero");
  const iconoAbajo = cartaDiv.querySelector(".icono-abajo");

  const cartaObtenida = obtenerCartaAleatoria();
  const cartaConColor = obtenerCartaConColor(cartaObtenida);

  iconoArriba.textContent = cartaConColor.icono;
  numeroCentro.textContent = cartaConColor.numero;
  iconoAbajo.textContent = cartaConColor.icono;

  cartaDiv.classList.add(cartaConColor.color);










  console.log("Hello Rigo from the console!");
};
