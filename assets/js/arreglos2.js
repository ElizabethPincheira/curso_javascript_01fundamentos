
let juegos = ['Zelda', 'Resident Evil', 'Silent hill', 'Mario'];
console.log('largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1]

console.log({primero, ultimo});
console.log({primero},ultimo);

juegos.forEach((elemento, indice, arr)=>{console.log({elemento, indice,arr});})

let nuevaLongitud = juegos.push('Cosito');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Sushigo');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});
//console.log(typeof juegos);


let pos = 1;
//juegos.splice(pos,1);
console.log(juegos)
let juegoBorrados = juegos.splice(pos,2);
console.log({juegoBorrados,juegos});

let silentIndex = juegos.indexOf('Silent hill');
console.log({silentIndex});

