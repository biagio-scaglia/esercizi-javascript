/*
    Esercizi JavaScript - 08 Debugging e Errori
    
    Ciao! Qui Biagio.
    A tutti capita di sbagliare (anche a me, spesso!).
    L'importante è saper trovare l'errore e non far esplodere tutto.
    
    Il "Debugging" è l'arte di togliere i bug (insetti fastidiosi) dal codice.
*/

// --- 1. Capire cosa succede con console.log ---
// Il tuo migliore amico. Usalo ovunque se non capisci perché una cosa non va.
let nome = "Biagio";
console.log("Valore di nome:", nome); // Stampi: Valore di nome: Biagio


// --- 2. console.table (Il trucco segreto per array e oggetti) ---
// Ti fa vedere i dati in una bella tabella ordinata.
let utenti = [
    { nome: "Mario", id: 1 },
    { nome: "Luigi", id: 2 },
    { nome: "Peach", id: 3 }
];
console.table(utenti); // Molto più leggibile di console.log!


// --- 3. try...catch (Gestire gli errori con grazia) ---
// Se c'è un errore dentro "try", il programma NON si blocca, ma salta su "catch".

console.log("--- Inizio prova try/catch ---");

try {
    // Proviamo a chiamare una funzione che non esiste
    funzioneCheNonEsiste();

    console.log("Questa riga NON verrà mai stampata perché ci sarà errore sopra.");

} catch (errore) {
    // Qui catturiamo l'errore
    console.error("C'è stato un problema!", errore.message);
}

console.log("--- Fine prova try/catch (Il programma continua!) ---");


// --- 4. DEBUGGER (Mettere in pausa il tempo) ---
// Se scrivi 'debugger;' nel codice e hai la console del browser aperta (F12),
// il codice si CONGELA in quel punto. Puoi controllare tutte le variabili passo dopo passo.

function calcoloComplesso(a, b) {
    let risultato = a * b;
    // debugger; // <--- Scommenta questa riga e apri la console (F12) per provare!
    return risultato + 10;
}

calcoloComplesso(5, 5);

/*
    ESERCIZIO PER TE:
    1. Scrivi un blocco try/catch.
    2. Dentro il 'try', prova a dividere un numero per 0 e vedi se da errore in JS (spoiler: in JS non da errore, fa Infinity!).
    3. Allora forza un errore scrivendo: throw new Error("Errore manuale!");
    4. Catturalo nel catch e stampa un messaggio carino.
*/
