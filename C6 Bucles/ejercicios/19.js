function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // if(n>=0){
  //   let suma = 0;
  //   for(let i=1; i<=n; i++){
  //     suma = suma + i
  //   }return suma
  // } else {
  //   return "el argumento de ser un munero positivo";
  // }
 var acumulador =0;
 for(var i = 1; i <=n; i++){
  acumulador = acumulador + i
 } return acumulador;
}
// for (i=1; i<=n; i++){
//   suma = suma + i
// }
// for (i=1; i<=n; i++){n=n+1};
// return i
// if(n>0)
// var i = nResultado
// for (i=1; i<=n; i++){
//   nResultado = nResultado + i
// }
module.exports = sumarHastaN;
