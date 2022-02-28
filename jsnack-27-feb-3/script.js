/**
 * 
Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

/* inizializzo una variabile con valore 0 */
let sum = 0;

/* con la parola chiave for inizializzo un ciclo che si ripeterà per 10 volte */
for( let i = 0; i <=10; i++){
    /* per ogni ciclo verra chiesto all'utente 
    un numero attraverso un prompt */
    let numbers = parseInt(prompt("inserisci qui un numero"));

    /* per ogni ciclo verrà sommata
     alla variabile sum il numero inserito dall'utente */
    sum += numbers;
}

/* viene scritta in consolle la somma dei dieci numeri inseriti dall'utente */
console.log( sum )