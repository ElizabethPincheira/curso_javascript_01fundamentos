
let a =10;
let b =a;
a=30;

console.log({a,b});

let juan = {nombre: 'juan'};
let ana  = juan;

console.log({juan, ana})
//**** 

const cambiaNombre = (xxx)=>{
    xxx.nombre= 'epona';
    return 'UU';
};

let rupinejo = {nombre: 'rupinejo'};
let epona = cambiaNombre (rupinejo);


console.log({rupinejo, epona})

//arreglos
const frutas= ['manzana', 'pera', 'piña'];

console.time('slice');
const otrasFrutas=frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2=[...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');
//console.log(otrasFrutas)
console.table({frutas, otrasFrutas});