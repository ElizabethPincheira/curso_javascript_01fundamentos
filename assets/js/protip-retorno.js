
//funcion normal

// function crearPersona ( nombre , apellido ) {
//     return { nombre , apellido }
// }

// const persona = crearPersona  ('Juan Pablo', 'Ormeño');
// console.log(persona);

//funcion convertida en funcion flecha

const crearPersona2 = (nombre, apellido) => ({nombre , apellido});

const persona2 = crearPersona2  ('Juan Pablo ', 'Ormeño');
console.log(persona2);



function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10,true,false,'holi', 'Eli');



const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad,args});
    return args;
}

const [soltero,casado,saludo,nombre ] = imprimeArgumentos2(10,true,false,'holi', 'Eli');
console.log({soltero,casado,saludo,nombre});

const {apellido: nuevoApellido} = crearPersona2 ('Juan Pablo ', 'Ormeño');
console.log({nuevoApellido});


const epona = {
    nombre: 'Epona la yegua',
    coderName: 'La yegua de link',
    viva: true,
    edad: 8,
    monturas: ['arreoImperial', 'arreoAncestral', 'arreoCasual']
};

// const imprimePropiedades = (personaje) =>{
//     console.log('nombre ',personaje.nombre);
//     console.log('codername ',personaje.coderName);
//     console.log('viva ', personaje.viva);
//     console.log('edad ',personaje.edad);
//     console.log('monturas ',personaje.monturas);
// };

// imprimePropiedades (epona)

const imprimePropiedades = ({nombre,coderName,viva,edad,monturas}) =>{
    console.log({nombre});
    console.log({coderName});
    console.log({viva});
    console.log({edad});
    console.log({monturas});
};

imprimePropiedades (epona)