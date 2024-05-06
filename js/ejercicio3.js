// 3. Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
// Función para crear un nuevo elemento de tarea con botón de eliminar

function crearTarea(texto) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = texto;

  // Crear botón de eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.className = "btn btn-danger btn-sm";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(botonEliminar);

  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const tareaInput = document.getElementById("tareaInput");
  const agregarBtn = document.getElementById("agregarBtn");
  const listaTareas = document.getElementById("listaTareas");

  agregarBtn.addEventListener("click", () => {
    const tareaTexto = tareaInput.value.trim();
    if (tareaTexto !== "") {
      const nuevaTarea = crearTarea(tareaTexto);
      listaTareas.appendChild(nuevaTarea);
      tareaInput.value = "";
    } else {
      alert("Ingrese una tarea válida.");
    }
  });
});
