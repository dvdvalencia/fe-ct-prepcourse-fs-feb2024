function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  var esMayorDeEdad = edad
  if (esMayorDeEdad >= 18) {
    return "Allowed"
  } else {
    return "Not allowed"
  }
  return edad
}

module.exports = mayoriaDeEdad;
