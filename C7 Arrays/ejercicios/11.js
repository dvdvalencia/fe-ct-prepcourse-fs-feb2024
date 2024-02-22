function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayduplicarElementos = []
  for (let i = 0; i < array.length; i++) {
    arrayduplicarElementos.push(array[i] * 2)
  } 
  return arrayduplicarElementos;
}

module.exports = duplicarElementos;
