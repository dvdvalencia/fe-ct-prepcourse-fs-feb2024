function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  // if (String)
  // return "string";
  // else if (Object)
  // return "object";
  // else if (Boolean)
  // return "boolean";
  // else if (Number)
  // return "number";
  // else if (Function)
  // return "funcion";
  // else if (Null)
  // return "object";
  // else if (undefined)
  // return "undefined";
  // else if (NaN)
  // return "number";
  // else if (foo)
  // return "undefined"
  return typeof valor
}

module.exports = esTipoDato;