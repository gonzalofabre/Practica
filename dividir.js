function dividir(num1,num2) {
    if(num2 != 0 ) {
        return num1/num2;
    }
        throw new Error ("no se puede dividir por cero");



};

module.exports = dividir;