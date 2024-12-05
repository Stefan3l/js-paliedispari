// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 - Chiedo all'utente di inserire una parola
// 2 - Salvo la parola del utente scritta al reverso in una nuova varibile
// 3 - Controllo se la parola inserita del utente e palindroma


    
 function isPalindroma(word) {
        let wordReverse =""
        for (let i = word.length - 1; i >= 0; i--) {
            wordReverse += word[i];
        }

          if (wordReverse === word) {
            return true
          }
        
        return false
 }



 const word = prompt(`Inserisci una parola`)
 console.log(isPalindroma(word))