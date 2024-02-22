function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   // if(n>=0){
   // let suma = 0
   // for (i=1; i<=n; i++)
   // if(i>100){
   // break};
   // return suma
   // } else {
   // return "el argumento de ser un munero positivo";
   // }
   var acumulador = 0;
   for(var i = 1; i <=n; i++){
     acumulador = acumulador + i;
     if (i >= 100) break;
   } 
   return acumulador;
}

// if(n>0)
// for (i=1; i<=n; i++)
// if(i>100){
// break};
// return n
module.exports = sumarHastaNConBreak;
