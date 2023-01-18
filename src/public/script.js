                                // Declaraciones

// Definiendo los espacios en forma de botones para lograr editarlos luego

const btn1 = document.querySelector('.espacio1');
const btn2 = document.querySelector('.espacio2');
const btn3 = document.querySelector('.espacio3');
const btn4 = document.querySelector('.espacio4');
const btn5 = document.querySelector('.espacio5');
const btn6 = document.querySelector('.espacio6');
const btn7 = document.querySelector('.espacio7');
const btn8 = document.querySelector('.espacio8');
const btn9 = document.querySelector('.espacio9');

// Definiendo los eventos de cada uno de los clicks

btn1.addEventListener('click', () => { clickeo(btn1) });
btn2.addEventListener('click', () => { clickeo(btn2) });
btn3.addEventListener('click', () => { clickeo(btn3) });
btn4.addEventListener('click', () => { clickeo(btn4) });
btn5.addEventListener('click', () => { clickeo(btn5) });
btn6.addEventListener('click', () => { clickeo(btn6) });
btn7.addEventListener('click', () => { clickeo(btn7) });
btn8.addEventListener('click', () => { clickeo(btn8) });
btn9.addEventListener('click', () => { clickeo(btn9) });

// Player = 1 == X
// Player = 2 == O

let player = 1;

                                // Funciones

// Función que será llamada cuando se clickea un btn. Esta función confirmará que el espacio este disponible, en caso que no lo esté salta una alerta, en caso de que lo esté, pondrá un circulo o una equis, dependiendo del turno del jugador, y luego cambia de turno.

const clickeo = (boton) => {
    if (boton.classList.contains("player1") || boton.classList.contains("player2")) {
        alert('Este espacio ya esta tomado');
    } else if(player == 1) {
        boton.classList.add('player1');
        player = 2;
    } else {
        boton.classList.add('player2');
        player = 1;
    }
}

function ganar() {
    
}