/*
    ESERCIZIO 03: FizzBuzz (Il Classico)

    Biagio: "Questo lo chiedono ai colloqui di lavoro, giuro!"
    Obiettivo: Cicli e Condizioni annidate.
*/

// CONSEGNA:
// Scrivi un ciclo che conta da 1 a 20.
// - Se il numero è divisibile per 3, stampa "Fizz".
// - Se il numero è divisibile per 5, stampa "Buzz".
// - Se il numero è divisibile SIA per 3 che per 5, stampa "FizzBuzz".
// - Altrimenti, stampa il numero normale.

// Suggerimento: l'ordine dei controlli è importante!
// Prima controlla se è divisibile per entrambi.
// Poi controlla i singoli.

// SCRIVI QUI SOTTO TENTA DI FARLO DA SOLO:







/*
    --- SOLUZIONE ---
    
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
*/
