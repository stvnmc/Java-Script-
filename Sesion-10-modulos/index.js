// Modulos y su utilizacion con CommonJS

// Formas de importar/exportar modulos
// 1.CommonJS - require
// 2.Import ES6 - import


// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma} = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematica.suma)

const {factorial, suma} = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

