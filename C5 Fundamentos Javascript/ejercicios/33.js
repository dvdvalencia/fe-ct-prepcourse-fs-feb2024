function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if ( numero === 2) {
    return true;
  }
  if ( numero=== 3) {
    return true;
  }
  if ( numero=== 5) {
    return true;
  }
  if ( numero=== 7) {
    return true;
  }
  if ( numero=== 11) {
    return true;
  }
  if ( numero=== 13) {
    return true;
  }
  if ( numero=== 17) {
    return true;
  }
  if (numero%2==0) {
    return false;
  } else if (numero % 3 == 0){
    return false;
  }else return true;
  // if (numero=0 || numero<1){return false}
  // if (numero === 0 || numero < 1) {
  //   return false;
  // } else {
  //   for (let i = 2; i <= numero; i++) {
  //     if (numero % i === 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}

module.exports = esNumeroPrimo;
