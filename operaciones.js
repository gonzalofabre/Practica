const sumar = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
function multiplicar (num1, num2) {
    return num1*num2
 };

 let operaciones= {
    sumar: sumar,
    resta: resta,
    multiplicar: multiplicar,
 };
 

module.exports = operaciones
