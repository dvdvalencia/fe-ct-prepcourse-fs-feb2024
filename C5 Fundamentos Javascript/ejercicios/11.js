function esMayorDeEdad(fechaNacimiento) {
//   // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
//   // de nacimiento de una persona.
//   // Determina si esta persona es mayor de edad (tiene 18 años o más).
//   // Devuelve true si lo es, caso contrario, retorna false.
//   // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
//   // Tu código:
// //  if( fechaNacimiento.getFullYear >= 18){
// //   return true }
// //   else false
// function esMayorDeEdad(fechaNacimiento) {
//   const fechaNac = new Date(fechaNacimiento);
//   const añoActual = new Date().getFullYear();

//   // Calcula la edad restando el año de nacimiento al año actual
//   const edad = añoActual - fechaNac.getFullYear();

//   // Verifica si la persona es mayor de edad (18 años o más)
//   return edad >= 18;
// }

// // Ejemplo de uso:
// console.log(esMayorDeEdad("1990-01-01")); // Devolverá true si la persona tiene 18 años o más
  var año = fechaNacimiento.getFullYear();

  var añoActual = new Date().getFullYear();

  if (añoActual - año > 18) {
    return true;
  } else {
    return false;
  }

}

module.exports = esMayorDeEdad;