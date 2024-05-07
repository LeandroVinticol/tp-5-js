// 6. Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

let tiempoInicial = 0;
let tiempoRestante = 0;
let intervalo;
let temporizadorFuncionando = false;

function iniciarTemporizador() {
    const tiempoInput = document.getElementById('tiempoInput').value;
    const tiempoValido = validarTiempo(tiempoInput);

    if (!tiempoValido) {
        alert('Ingrese un tiempo válido en formato HH:MM:SS.');
        return;
    }

    const tiempoSplit = tiempoInput.split(':');
    const horas = parseInt(tiempoSplit[0]);
    const minutos = parseInt(tiempoSplit[1]);
    const segundos = parseInt(tiempoSplit[2]);
    tiempoInicial = tiempoRestante = horas * 3600 + minutos * 60 + segundos;

    actualizarTemporizador();
    temporizadorFuncionando = true;

    intervalo = setInterval(() => {
        tiempoRestante--;
        if (tiempoRestante < 0) {
            pausarTemporizador();
            alert('¡Tiempo completado!');
        } else {
            actualizarTemporizador();
        }
    }, 1000);

    document.getElementById('iniciarBtn').disabled = true;
    document.getElementById('pausarBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
}

function pausarTemporizador() {
    clearInterval(intervalo);
    temporizadorFuncionando = false;
    document.getElementById('iniciarBtn').disabled = false;
    document.getElementById('pausarBtn').disabled = true;
}

function resetearTemporizador() {
    clearInterval(intervalo);
    temporizadorFuncionando = false;
    document.getElementById('temporizador').textContent = `00:00:00`;
    document.getElementById('iniciarBtn').disabled = false;
    document.getElementById('pausarBtn').disabled = true;
}

function actualizarTemporizador() {
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = tiempoRestante % 60;

    const formatoTiempo = 
        pad(horas) + ':' + 
        pad(minutos) + ':' + 
        pad(segundos);

    document.getElementById('temporizador').textContent = formatoTiempo;
}

function pad(numero) {
    return (numero < 10 ? '0' : '') + numero;
}

function validarTiempo(tiempo) {
    const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    return regex.test(tiempo);
}
