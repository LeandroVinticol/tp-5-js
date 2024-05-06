/* 2. Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.*/
// Clase Persona
class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  // Método para mostrar la generación a la que pertenece la persona
  mostrarGeneracion() {
    let generacion = "";
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      generacion = "Silent Generation";
      alert(
        `La persona pertenece a la generación Silent Generation. Rasgo característico: Austeridad.`
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      generacion = "Baby Boom";
      alert(
        `La persona pertenece a la generación Baby Boom. Rasgo característico: Ambición.`
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      generacion = "Generación X";
      alert(
        `La persona pertenece a la generación X. Rasgo característico: Obsesión por el éxito.`
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      alert(
        `La persona pertenece a la generación Y (Millennials). Rasgo característico: Frustración.`
      );
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      generacion = "Generación Z";
      alert(
        `La persona pertenece a la generación Z. Rasgo característico: Irreverencia.`
      );
    } else {
      generacion = "Generación no definida";
      alert(`No se puede determinar la generación de la persona.`);
    }
  }

  // Método para verificar si la persona es mayor de edad
  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`La persona ${this.nombre} es mayor de edad.`);
    } else {
      alert(`La persona ${this.nombre} no es mayor de edad.`);
    }
  }

  // Método para mostrar todos los datos de la persona
  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} m\nAño de Nacimiento: ${this.añoNacimiento}`;
  }
}

document.getElementById("personaForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombreInput").value;
  const edad = parseInt(document.getElementById("edadInput").value);
  const DNI = document.getElementById("dniInput").value;
  const sexo = document.getElementById("sexoInput").value;
  const peso = parseFloat(document.getElementById("pesoInput").value);
  const altura = parseFloat(document.getElementById("alturaInput").value);
  const añoNacimiento = parseInt(document.getElementById("anioInput").value);

  const persona = new Persona(
    nombre,
    edad,
    DNI,
    sexo,
    peso,
    altura,
    añoNacimiento
  );

  document.getElementById("personaForm").style.display = "none";
  document.getElementById("resultados").style.display = "block";

  document
    .getElementById("mostrarGeneracionBtn")
    .addEventListener("click", () => {
      persona.mostrarGeneracion();
    });

  document.getElementById("esMayorDeEdadBtn").addEventListener("click", () => {
    persona.esMayorDeEdad();
  });

  console.log(persona.mostrarDatos());
});
