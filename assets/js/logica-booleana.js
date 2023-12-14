


const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

//warn (warning)
    
console.warn('Not o la negación')
console.log(true);
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse ());//true

console.warn('And'); // va a resultar true, si todos los valores son verdaderos
console.log(true && true);// true
console.log(true && !false);// false

console.log('===========');
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false

console.log('===== && ======');
regresaFalse() && regresaTrue();