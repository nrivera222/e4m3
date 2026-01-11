// Captura de datos del usuario
const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");

// Procesamiento de los nombres
const inicialNombre = nombre.charAt(0).toLowerCase();
const primerasLetrasApellido = apellido.slice(0, 3).toLowerCase();

// Generación del número aleatorio de dos dígitos
const numeroAleatorio = Math.floor(Math.random() * 90) + 10;

// Ensamblaje del nombre de usuario
const nombreUsuario = inicialNombre + primerasLetrasApellido + numeroAleatorio;

// Mostrar resultado en consola
console.log("Tu nuevo nombre de usuario es: " + nombreUsuario);
