// 4. Crear una web con un reloj.

document.addEventListener("DOMContentLoaded", () => {
  const fechaElemento = document.getElementById("fecha");
  const horaElemento = document.getElementById("hora");

  function actualizarReloj() {
    const ahora = new Date();

    // Obtener día de la semana, día del mes, mes y año
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const diaSemana = diasSemana[ahora.getDay()];
    const diaMes = ahora.getDate();
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    const fechaTexto = `${diaSemana} ${diaMes} de ${mes} del ${año}`;
    fechaElemento.textContent = fechaTexto;

    // Obtener hora, minutos y segundos
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? "PM" : "AM";
    horas = horas % 12 || 12; // Convertir horas a formato de 12 horas

    const horaTexto = `${horas}:${minutos < 10 ? "0" : ""}${minutos}:${
      segundos < 10 ? "0" : ""
    }${segundos} ${ampm}`;
    horaElemento.textContent = horaTexto;
  }

  // Actualizar el reloj cada segundo
  setInterval(actualizarReloj, 1000);

  actualizarReloj();
});
