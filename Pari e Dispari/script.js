// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto


// 1 - Chiedo al utente di inserire un numero da 1 a 5
// 2 - Generiamo un numero random (sempre da 1 a 5) per il computer
// 3 - Sommiamo i due numeri

// 4 - Stabiliamo se la somma dei due numeri e pari o dispari (usando un altra function)'
//   - Controllo se la somma e pari o dispari con il % di 2
// 5 - Dichiariamo chi ha vinto


// --- Function per sommare due numeri num1 + num2
function sumNumbers(num1, num2) {
    return  num1 + num2;
}

// --- Function genera numero random CPU

function generaNumeroRandom(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

 // --- Function per controlare se un numero e pari o dispari
 function evenOodd(sum) {
    if ( sum % 2 === 0 ) {
        alert(`la somma e un numero pari ${sum} 😁`)
        return true
    }
    else {
        alert(`la somma e un numero dispari ${sum} 😁`)
    }
    return false
}

// --- Function controllo se due numeri sono pari entrambi, o se due numeri sono dispari entrambim o se un numero e pari e un numero dispari o al contrario
function numbersEvenorOdd(num1, num2) {
    if ( numbUtente % 2 === 0 && sum % 2 === 0 ) {
        alert(`Il numero del utente e pari ${numbUtente} e il numero della somma e pari ${sum} quindi ha vinto il utente perche tutti due numeri sono pari 😎`)
        return true
    }
    else if ( numbUtente % 2 === 1 && sum % 2 === 1) {
        alert(`Il numero del utente e dispari ${numbUtente} e il numero della somma e dispari ${sum} quindi ha vinto il utente perche tutti due numeri sono dispari 😎`)
        return true

    }
    else {
        alert(`Ha vinto il CPU perche il numero del utente ${numbUtente} e diverso dal numero ${sum} pari/dispari o dispari/pari 😢`)
    }
    return false
}

// --- Function per chiedere al utente di inserire un numero 
function numbUser(min, max) {
    const numbUtente = Number(prompt(`Inserisci un numero da 1 a 5`))
    console.log(numbUtente)
    if ( numbUtente >= min && numbUtente <= max) {  
    }
    else {
    alert(`Hai inserito un numero sbagliato 😢`)
    broke;
    }
    return numbUtente
}


const numbCpu = generaNumeroRandom(1, 5)
console.log(numbCpu);
const numbUtente = numbUser(1, 5);
const sum = sumNumbers(numbUtente, numbCpu)
console.log(sum)
const even = evenOodd(sum);
console.log(even)
const isEvenorOdd = numbersEvenorOdd(numbUtente, sum)
console.log(isEvenorOdd);