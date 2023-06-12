// CONDIZIONI

// Operatori relazionali

// Uguaglianza
console.log('---------------------------');
console.log('UGUAGLIANZA');
console.log('---------------------------');

let x1 = 3;
const x2 = 4;

console.log(x1 == 3);
if (x1 == 3) {
    console.log('x1 è uguale a 3');
}
else {
    console.log('x1 NON è uguale a 3');
}

console.log(x2 == 3);
if (x2 == 3) {
    console.log('x2 è uguale a 3');
}
else {
    console.log('x2 NON è uguale a 3');
}

x1 = 7;
console.log(x1 == 3);
if (x1 == 3) {
    console.log('x1 è uguale a 3');
}
else {
    console.log('x1 NON è uguale a 3');
}

console.log(x1 == '7');
console.log('x1', x1, typeof x1);
console.log('"7"', '7', typeof '7');
if (x1 == '7') {
    console.log('x1 è uguale a "7"');
}
else {
    console.log('x1 NON è uguale a "7"');
}

// Diversità
console.log('---------------------------');
console.log('DIVERSITA');
console.log('---------------------------');

console.log(x1 != 3);
if (x1 != 3) {
    console.log('x1 è diverso da 3');
}
else {
    console.log('x1 NON è diverso da 3');
}

console.log(x2 != 3);
if (x2 != 3) {
    console.log('x2 è diverso da 3');
}
else {
    console.log('x2 NON è diverso da 3');
}

x1 = 3;
console.log(x1 != 3);
if (x1 != 3) {
    console.log('x1 è diverso da 3');
}
else {
    console.log('x1 NON è diverso da 3');
}

// Maggiore/minore
console.log('---------------------------');
console.log('MAGGIORE/MINORE');
console.log('---------------------------');

console.log(x1 > 3);
if (x1 > 3) {
    console.log('x1 è maggiore di 3');
}
else {
    console.log('x1 NON è maggiore di 3');
}

console.log(x2 > 3);
if (x2 > 3) {
    console.log('x2 è maggiore di 3');
}
else {
    console.log('x2 NON è maggiore di 3');
}

x1 = 7;
console.log(x1 > 3);
if (x1 > 3) {
    console.log('x1 è maggiore di 3');
}
else {
    console.log('x1 NON è maggiore di 3');
}

// Maggiore/minore uguale
console.log('---------------------------');
console.log('MAGGIORE/MINORE UGUALE');
console.log('---------------------------');

console.log(x1 >= 3);
if (x1 >= 3) {
    console.log('x1 è maggiore o uguale di 3');
}
else {
    console.log('x1 NON è maggiore o uguale di 3');
}

console.log(x2 >= 3);
if (x2 >= 3) {
    console.log('x2 è maggiore o uguale di 3');
}
else {
    console.log('x2 NON è maggiore o uguale di 3');
}

x1 = 3;
console.log(x1 >= 3);
if (x1 >= 3) {
    console.log('x1 è maggiore o uguale di 3');
}
else {
    console.log('x1 NON è maggiore o uguale di 3');
}

// Identità
console.log('---------------------------');
console.log('IDENTITA');
console.log('---------------------------');

console.log(x1 === 3);
if (x1 === 3) {
    console.log('x1 è IDENTICO a 3');
}
else {
    console.log('x1 NON è IDENTICO a 3');
}

console.log(x2 === 3);  // NON IDENTICO PER VALORE
if (x2 === 3) {
    console.log('x2 è IDENTICO a 3');
}
else {
    console.log('x2 NON è IDENTICO a 3');
}

x1 = '3';
console.log(x1 === 3);  // NON IDENTICO PER TIPO
if (x1 === 3) {
    console.log('x1 è IDENTICO a 3');
}
else {
    console.log('x1 NON è IDENTICO a 3');
}












/* 
    --------------------------------------------------------
*/

// DATE
console.log('---------------------------');
console.log('DATE');
console.log('---------------------------');
const ora = new Date();

console.log('ora', ora, typeof ora);
console.log('Anno corrente:', ora.getFullYear());
console.log('Mese corrente:', ora.getMonth() + 1);
console.log('Giorno corrente:', ora.getDate());

if (ora.getMonth() == 5) {
    console.log('Estamos en Junio');
}












/* 
    --------------------------------------------------------
*/

// RANDOM
console.log('---------------------------');
console.log('RANDOM');
console.log('---------------------------');


console.log('Numero casuale:', Math.random());
console.log('Numero casuale tra 0 e 9.9999...:', Math.random() * 10);
console.log('Numero casuale tra 0 e 9:', Math.floor(Math.random() * 10));
console.log('Numero casuale tra 1 e 10:', Math.floor(Math.random() * 10) + 1);
console.log('Numero casuale tra 20 e 29:', Math.floor(Math.random() * 10) + 20);
console.log('Numero casuale tra 20 e 39:', Math.floor(Math.random() * (40 - 20)) + 20);
console.log('Numero casuale tra 20 e 40:', Math.floor(Math.random() * (40 - 20 + 1)) + 20);



/* 
    --------------------------------------------------------
*/

// DA STRINGA A INTERO
const numeroInStringa = prompt('Inserisci un numero:');
const numeroNumber = parseInt(numeroInStringa);

console.log('numeroInStringa', numeroInStringa, typeof numeroInStringa);
console.log('numeroNumber', numeroNumber, typeof numeroNumber);

if (isNaN(numeroNumber)) {
    alert('Ma sei scemo?');
}



/* 
    --------------------------------------------------------
*/

// COME SAPERE LA LUNGHEZZA DI UNA STRINGA

const stringaQualsiasi = 'ABCDE';

console.log('La stringa "stringaQualsiasi" è lunga', stringaQualsiasi.length, 'caratteri');




























/* 
    --------------------------------------------------------
*/

// if (!utenteLoggato) {   // if (!utenteLoggato == true) {...
//     // ...
// }

// // OPPURE

// if (utenteLoggato == false) {
//     // ...
// }




/* 
    --------------------------------------------------------
*/

// if ((sonoBello && sonoRicco) || (sonoForte && sonoFamoso)) {
//     miInvitanoOvunque();
// }

// // DIVERSO DA:

// if (sonoBello && sonoRicco || sonoForte && sonoFamoso) {
//     miInvitanoOvunque();
// }



// /* 
//     --------------------------------------------------------
// */

// if(x == 3 && y == 4 && z != 7)


// if (password è una stringa && lunghezza di password è maggiore di 8 && password contiene un carattere speciale)


// if (password contiene un carattere speciale && password è una stringa && lunghezza di password è maggiore di 8)

