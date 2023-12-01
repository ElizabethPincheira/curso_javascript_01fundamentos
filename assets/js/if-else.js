


let a = 5;

if (a >= 10) {
    console.log('a es mayor o igual a 10')
} else {
    console.log('a es menor a 10')
}

//console.log('fin del programa')

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...
console.log({ dia })

if (dia === 0) {
    console.log('Domingo')
} else if(dia ===1){
    console.log('Lunes');
    // console.log('No es domingo');
    // if (dia ===1) {
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes ni domingo');
    // }
}else if(dia === 2){
    console.log('martes')
}else {
    console.log('No es lunes, martes o domingo');
}




//ejercicio: traer el día en que estamos sin if else o swich

dia = 3;//0: Domingo, 1: Lunes, 2: Martes...

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
}

//día de la semana.
console.log( diasLetras [dia]);

//otra manera.

dia = 3;//0: Domingo, 1: Lunes, 2: Martes...

const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',]

//día de la semana.
console.log( diasLetras2 [dia]);

