function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  // var fecha
  // function esFechaValida (fecha){
  //   return Date(fecha);
  // // }
  // if (fecha = Date){
  //   return true
  // } else if (fecha != Date) {
  //   return false
  // }
  // if(fecha.toString() == "invalid date") {
  //   return false;
  // }
  //   if (fecha instanceof Date) {
  //     return true;
  // //   } else if (fecha!= Date) {
  // // return true;
  // } else return false;
  var hoy = new Date();
  if (hoy >= fecha) {
    return true;
  } else{
    return false;
  }
}

module.exports = esFechaValida;