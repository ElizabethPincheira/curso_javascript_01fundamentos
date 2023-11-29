let personaje = {
    nombre: 'Epona la yegua',
    coderName: 'La yegua de link',
    viva: true,
    edad: 8,
    coord:{
        lat:736.0,
        long: 26.2
    },
    monturas: ['arreoImperial', 'arreoAncestral', 'arreoCasual']
};


console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('latitud', personaje.coord.lat);
console.log('Número de monturas', personaje.monturas.length)
console.log('último arreo',personaje.monturas[personaje.monturas.length -1])

const x = 'viva';
console.log('viva',personaje[x]);


//Más detalles sobre objetos literales

delete personaje.edad;
console.log(personaje)

personaje.galopando=true

const entriesPares=Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 1000000000000;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
//console.log(propiedades);
console.log(propiedades,valores);


