// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto


// 1 - Chiedo al utente di inserire un numero da 1 a 5
// 2 - Generiamo un numero random (sempre da 1 a 5) per il computer
// 3 - Sommiamo i due numeri

// 1 - Stabiliamo se la somma dei due numeri e pari o dispari (usando un altra function)'
//   - Controllo se la somma e pari o dispari con il % di 2
// 2 - Dichiariamo chi ha vinto



function sumNumbers(num1, num2) {
    return  num1 + num2;
}

const numbUtente = Number(prompt(`Inserisci un numero da 1 a 5`))
console.log(numbUtente)

if ( numbUtente >= 1 && numbUtente <= 5) {  
}
else {
    alert(`Hai inserito un numero sbagliato`)
    broke;
}

const numbCpu = Math.floor(Math.random() * 4) + 1;
console.log(numbCpu)


const sum = sumNumbers(numbUtente, numbCpu)
console.log(sum)

if ( sum % 2 === 0 ) {
    alert(`i numeri sono pari`)
}
else {
    alert(`i numeri sono dispari`)
}

if ( numbUtente % 2 === 0 && sum % 2 === 0 ) {
    alert(`i numeri sono pari tutte due e ha vinto l'utente`)
}
else if ( numbUtente % 2 === 1 && sum % 2 === 1) {
    alert(`i numeri sono dispari tutte due e ha vinto l'utente`)
}
else {
    alert(`i numeri uno e pari e l'altro dispari e quindi ha vinto CPU`)
}