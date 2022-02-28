/**
 *
  Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

  /* chiedo all'utente di inserire un numero tramite prompt */
  let userNumber = prompt("inserisci un numero di sette cifre");

  /* con il metodo split divido il numero inserito ,che in raltà viene restituito come string dal prompt,
    in tutte le sue componenti prese singolarmente
  */
  let numbers = userNumber.split("");
  
  /* inizializzo la variabile sum a 0, successivamente conterra la somma dei numeri estrapolati dalla string */
  let sum = 0

    /* inizializzo un ciclo for che si ripetera tante volte quanto il risultato che restituisce la proprieta length */
  for(let i = 0; i < numbers.length; i++ ){
    /* per ogni ciclo alla variabile sum verranno sommati
    i valori estrapolati  dall'input utente tramite split
    */
   /* come detto in precedenza il prompt restuituisce una string quindi con la funzione parseInt li convertiamo in interi */
    sum += parseInt(numbers[i]);

  } 

  /* scriviamo in consolle la somma algebrica dei numeri estrapolati dall'input utente */
  console.log(sum);