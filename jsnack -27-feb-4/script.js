
/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

/* creo una variabile contenente un array composto da dati di tipo string */
let clientList = ["giovanni", "sergio", "eustachio", "francesco", "riccardo","gismondo","roberto","prince","alba", "anna"];
/* chiedo all'utente di inserire il proprio nome tramite prompt e
usando le funzioni di lowercase "per trasformare l'input tutto in lettere minuscole"
e la funzione trim (per escludere gli spazi inseriti prima o dopo la string) */
let userName = prompt("inserisci il tuo nome per la verifica").toLowerCase().trim();

/* creo una variabile che fara da flag per uscire dal ciclo */
let isListed = false;

/* creo un ciclo che scorrera tutto l'array clienList */
for(let i = 0; i < clientList.length; i++){
    /* con una verifica condizionale verifico se l'input dell'utente corrisponde ad una
    delle string presenti nell'array */
    if(clientList[i].toLowerCase() === userName){
        /* se la condizione si dovesse verificare setto il varole della variabile flag a true */
        isListed = true;
    }

}

/* con questa verifica condizionale verra stampato in consolle un messaggio 
in base al valore che avra la variabile flag a fine del ciclo */
if (isListed){
    console.log("lil nome inserito e nella lista invitati");
}else{
    console.log("non e tra gli invitati");
}