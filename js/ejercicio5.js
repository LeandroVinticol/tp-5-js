// 5. Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let tiempoInicio = 0;
let intervalo;
let cronometroFuncionando = false;
let tiempoTranscurrido = 0;

function iniciarCronometro() {
  if (!cronometroFuncionando) {
    cronometroFuncionando = true;
    tiempoInicio = Date.now() - tiempoTranscurrido;
    intervalo = setInterval(actualizarCronometro, 10);
    document.getElementById("iniciarBtn").disabled = true;
    document.getElementById("pausarBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
  }
}

function pausarCronometro() {
  cronometroFuncionando = false;
  clearInterval(intervalo);
  document.getElementById("iniciarBtn").disabled = false;
  document.getElementById("pausarBtn").disabled = true;
}

function resetearCronometro() {
  cronometroFuncionando = false;
  clearInterval(intervalo);
  tiempoTranscurrido = 0;
  document.getElementById("cronometro").textContent = `00:00:00`; // Actualizar el cronómetro a 00:00:00
  document.getElementById("iniciarBtn").disabled = false;
  document.getElementById("pausarBtn").disabled = true;
}

function actualizarCronometro() {
  const tiempoActual = Date.now();
  tiempoTranscurrido = tiempoActual - tiempoInicio;

  const horas = Math.floor(tiempoTranscurrido / 3600000);
  const minutos = Math.floor((tiempoTranscurrido % 3600000) / 60000);
  const segundos = Math.floor((tiempoTranscurrido % 60000) / 1000);

  const formatoTiempo = pad(horas) + ":" + pad(minutos) + ":" + pad(segundos);

  document.getElementById("cronometro").textContent = formatoTiempo;
}

function pad(numero) {
  return (numero < 10 ? "0" : "") + numero;
}
