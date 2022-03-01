//! da rieditare con la correzzione

/* creo un array nel quale ogni elemento è un numero casuale ottenuto tramite la funzione math.random */
let randomNumbersArray = [Math.round(Math.random() * 100), Math.round(Math.random() * 100) , Math.round(Math.random() * 100) 
                            , Math.round(Math.random() * 100) , Math.round(Math.random() * 100) , Math.round(Math.random() * 100) , Math.round(Math.random() * 100) , 
                                Math.round(Math.random() * 100) , Math.round(Math.random() * 100) , Math.round(Math.random() * 100) ];

/* scrivo in consolle l'array inizializzato in precedenza */
console.log(randomNumbersArray)

/* inizializzo una variabile a 0 che succesivamente conterra la somma dei numeri che compongono l'array */
let sum = 0;

/* inizializzo un ciclo for che sommerà alla variabile sum uno degli elementi dell'array ad ogni ciclo */
for(let i = 0; i < randomNumbersArray.length; i++){

    sum += randomNumbersArray[i];

}

/* scrivo in consolle la somma di tutti gli elementi dell'array preceduta da un messaggio */
console.log( "la somma di tutti i numeri presenti nell'array è: "+ sum);
/* scrivo in consolle la media dei numeri presenti nell'array  */
console.log("la media dei numeri che compongono l'array è: " + sum / randomNumbersArray.length); 