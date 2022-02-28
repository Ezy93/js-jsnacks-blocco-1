/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */


/*  creo la viariabile dove verra memorizzato 
    il primo numero inserito dall'utente */
let userNumber = parseInt(prompt("inserisci un numero"));

/* con questo comando dico allo script di mandare in console il messaggio più
il valore della variabile creata precedentemente */
console.log("il primo numero inserito dall'utente è: " + userNumber );

/* creo un altra variabile dove verra memorizzato il secondo
numero inserito dall'utente */
let userSecondNumber = parseInt(prompt("inserisci un secondo numero"));
/* comando che permette di scrivere in console il numero inserito dall'utente ù
preceduto da un messaggio */
console.log("il secondo numero inserito dall'utente è: " + userSecondNumber );


/* con la parola chiave if eseguo un controllo condizionale sulle variabile 
inizializzate in precedenza*/


if (userNumber > userSecondNumber ) {

    /* lo script scrivera in consolle dopo i precedenti messaggi 
    il valore della variabile userNumber solo se la condizione e verificata */
    console.log(userNumber);

}else if (userNumber < userSecondNumber){
    /* lo script scrivera in consolle dopo i precedenti messaggi 
    il valore della variabile userSecondNumber solo se la condizione e verificata */
    console.log(userSecondNumber);

}else{

}