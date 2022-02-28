/**
 * 
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 * 
 */

/* creo una variabile con un array vuoto che mi servirà da contenitorre */
let unpairNumbers = [];

/* inizializzo un ciclo for che si ripeterà per sei volte */
for(let i = 0; i < 6; i++){
    /* per ogni ciclo verra chiesto all'utente di inserire un numero  */
    let userNumber = parseInt(prompt("inserisci un numero"));

    /* con l'operatore modulo controllo se il numero inserito dall'utente e pari o dispari */
    if(userNumber % 2){
        /* se la condiziona siopra indicata si verifica allora il numero verrà aggiunto all'array inizializzato in precedenza */
        unpairNumbers.push(userNumber);
    }

}

/* alla dine del ciclo scrivo in consolle l'array */
console.log(unpairNumbers);