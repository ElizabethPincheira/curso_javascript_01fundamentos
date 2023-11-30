function saludar ( nombre ) {
    //console.log('Hola '+ nombre)
    //console.log(arguments);
    return 10;
    
    //esto nunca de va a ejecutar
    console.log('esto es un código que nunca se va a ejecutar')
}
const saludar2 =function(nombre) {
    console.log('Hola '+ nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola '+nombre);
} 

const saludarFlecha2 = (nombre) => {
    console.log('Hola '+ nombre);
} 



const retornoSaludar = saludar('Juan Pablo',38 ,true,'La serena');
console.log(retornoSaludar);

// saludar2('Eli');

// saludarFlecha('Juanpito');
// saludarFlecha2('Minipito');


function sumar ( a , b ) {
    return a + b ;
}
//esto se usa si hay más codigo
//const sumar2 = (a,b) => {
    //más lineas de codigo...
    //return a + b ;   
//}

//si no hay más lines de código y es solo un return se escribes así
const sumar2 = (a,b) => a+b;
// es una funcion de flecha que va a retornar a más b

console.log(sumar(1,2));
console.log(sumar2(2,2));


//transformar esta funcion en funcion con flecha que se llame getAleatorio2

function getAleatorio () {
    return Math.random();
}

console.log(getAleatorio());

//Respuesta
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());