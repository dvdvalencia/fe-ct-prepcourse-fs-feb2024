function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 15 === 0)
  return "fizzbuzz";
  if (num % 3 === 0)
  return "fizz";
  if (num % 5 === 0)
  return "buzz";
  return false;

  // switch(num){
  //   case 3:
  //   return "fizz"
  //   case 5:
  //   return "buzz"
  //   case 15:
  //   return "fizzbuzz"
  // }
}

module.exports = fizzBuzz;