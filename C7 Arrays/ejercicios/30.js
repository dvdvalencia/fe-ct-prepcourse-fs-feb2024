function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(numeros[i]=== numeros[j]) return[i];
    }
  }
}

module.exports = encontrarElementoRepetido;