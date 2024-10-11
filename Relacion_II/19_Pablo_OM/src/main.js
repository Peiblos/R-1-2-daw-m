//------- VERSION 1 -----------
/**
 * @author: Pablo Ortega
 * @description: Ejercicio 19 Palindromo - Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es
decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver
true si la palabra es un palíndromo y false en caso contrario.
 * @param {String} palabra 
 * @returns {boolean} 
 */
const esPalindromoV1 = (palabra) => {
    if(typeof palabra === "string"){
        const palabraEnMinus = palabra.toLowerCase();
        const word = [...palabraEnMinus];
        for(let i=0;i<word.length;i++){
            return word[i]===word[(word.length-1)-i] ? true : false;
        }
    }else{
        console.log("Introduzca texto");
    }
}

//------- VERSION 2 -----------
/**
 * @author: Pablo Ortega
 * @description: Ejercicio 19 Palindromo - Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es
decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver
true si la palabra es un palíndromo y false en caso contrario.
 * @param {string} palabra 
 * @returns {boolean}
 */
const esPalindromoV2 = (palabra) => {
    if(typeof palabra === "string"){
        const palabraEnMinus = palabra.toLowerCase();
        const palabraInvertida = palabraEnMinus.split('').reverse().join('');
        return palabraEnMinus === palabraInvertida;
    }else{
        console.log("Introduzca texto");
    }
}

//---------TEST VERSION 1------------
console.log(esPalindromoV1("hola"));
console.log(esPalindromoV1(1991));
console.log(esPalindromoV1("Reconocer"));
console.log(esPalindromoV1([1,2,3,4]));
console.log(esPalindromoV1({}));

//---------TEST VERSION 2------------
console.log(esPalindromoV2("hola"));
console.log(esPalindromoV2(1991));
console.log(esPalindromoV2("Reconocer"));
console.log(esPalindromoV2([1,2,3,4]));
console.log(esPalindromoV2({}));