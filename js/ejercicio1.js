// 1. Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

document.addEventListener('DOMContentLoaded', () => {
    const comenzarBtn = document.getElementById('comenzarBtn');
    const juegoDiv = document.getElementById('juego');
    const numeroInput = document.getElementById('numeroInput');
    const enviarBtn = document.getElementById('enviarBtn');

    let numeroMagico;

    comenzarBtn.addEventListener('click', () => {
        numeroMagico = Math.floor(Math.random() * 1000) + 1;
        console.log('Número mágico:', numeroMagico);

        juegoDiv.style.display = 'block';
        comenzarBtn.style.display = 'none';
    });

    enviarBtn.addEventListener('click', () => {
        const numeroIngresado = parseInt(numeroInput.value);

        if (numeroIngresado === numeroMagico) {
            alert('¡Felicidades! Adivinaste el número.');
            juegoDiv.style.display = 'none';
            comenzarBtn.style.display = 'block';
            numeroInput.value = '';
        } else if (numeroIngresado > numeroMagico) {
            alert('El número ingresado es mayor que el número mágico. Intenta nuevamente.');
        } else {
            alert('El número ingresado es menor que el número mágico. Intenta nuevamente.');
        }
    });
});
