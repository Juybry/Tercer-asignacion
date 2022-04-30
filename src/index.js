const express = require("express");

const app = express();

let idCache = 0;
let idPrincipal = 0;
let memoriaCache = [ [idCache, 1234, 0000, 4321] ];
let memoriaPrincipal = [ [idPrincipal, 0000, 1010, 1234] ];

app.listen('3000', () =>{
    console.log('Iniciando memorias caché y principal---');
    imprimirTablas(memoriaCache, memoriaPrincipal)
    filling();
    setTimeout( () => {
        imprimirTablas(memoriaCache, memoriaPrincipal)
        console.log('Tomando SS \n Terminando proceso...')
        process.exit(1);
    }, 5000);
});

let generarDato = (min, max) => {
    return Math.floor((Math.random() * (max-min)) + min);
};

let generarRegistro = (tabla) => {
    let w = ++idCache;
    let x = generarDato(1000, 9999);
    let y = generarDato(1000, 9999);
    let z = generarDato(1000, 9999);
    let aux = [w,x,y,z];
    tabla.push(aux);
};

let filling = () => {
    setInterval(() =>{
        generarRegistro(memoriaCache);
        generarRegistro(memoriaPrincipal);
    }, 500);
};

let imprimirTablas = (tabla1, tabla2) => {
    console.log('\nMemoria Caché: ');
    console.log(tabla1);
    console.log('\nMemoria Principal: ');
    console.log(tabla2);
}
