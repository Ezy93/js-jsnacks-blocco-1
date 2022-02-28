/**
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

/* memorizzo la prima parola inserita dall'utente in questa variabile */
let userFirstWord = prompt("inserisci qui la prima parola");

/* memorizzo la seconda parola inserita dall'utente */
let userSecondWord = prompt("inserisci qui la seconda parola");

/* usando la proprietà length metto a confronto la lunghezza delle variabili */
if(userFirstWord.length > userSecondWord.length){
    /* se la prima parola sarà piu lunga della seconda verrà scritta in consolle per prima */
    console.log(userFirstWord);
    console.log(userSecondWord);

}else if(userFirstWord.length < userSecondWord.length){
    /* se la seconda parola sarà piu lunga della seconda verrà scritta in consolle per prima */
    console.log(userSecondWord);
    console.log(userFirstWord);

}else{
    /* se le due parole avranno la stessa lunghezza in consolle 
    comparira il seguente messaggio */
    console.log("so lunghe uguali");
}