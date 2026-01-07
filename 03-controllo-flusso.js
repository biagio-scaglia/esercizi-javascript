/*
    Esercizi JavaScript - 03 Controllo del Flusso
    
    Ciao! Sempre Biagio qui.
    Adesso impariamo a far prendere strade diverse al nostro codice.
    È come un bivio stradale: "Se è rosso fermati, altrimenti passa".
*/

// --- 1. IF / ELSE (Il classico) ---
let orario = 14;

if (orario < 12) {
    console.log("Buongiorno!");
} else if (orario < 18) {
    console.log("Buon pomeriggio!");
} else {
    console.log("Buonasera!");
}


// --- 2. SWITCH (Ottimo quando hai tante opzioni precise) ---
// Utile per menu, giorni della settimana, stati di un gioco, ecc.
let giorno = "Lunedì";

switch (giorno) {
    case "Lunedì":
        console.log("Inizia la settimana... forza e coraggio!");
        break; // ATTENZIONE: il break serve per uscire, altrimenti esegue anche i casi sotto!
    case "Venerdì":
        console.log("Ci siamo quasi, sta arrivando il weekend!");
        break;
    case "Sabato":
    case "Domenica":
        console.log("Relax totale.");
        break;
    default:
        console.log("È un giorno qualunque.");
}


// --- 3. Operatore Ternario (Il 'maestro della sintesi') ---
// È un if/else scritto in una sola riga.
// Sintassi: condizione ? vero : falso;

let maggiorenne = true;
let messaggio = maggiorenne ? "Puoi entrare" : "Torna quando sarai grande";
console.log(messaggio);

// È molto comodo per assegnare valori al volo.
let livelloBatteria = 15;
let statoBatteria = livelloBatteria < 20 ? "Basso" : "Ottimale";
console.log("Stato batteria:", statoBatteria);

/*
    ESERCIZIO PER TE:
    1. Crea una variabile 'votoEsame' con un numero da 0 a 30.
    2. Usa un if/else per stampare:
       - "Bocciato" se < 18
       - "Promosso" se >= 18 e < 25
       - "Ottimo" se >= 25
    3. (Opzionale) Prova a scrivere la stessa logica (o una semplificata) usando switch o ternario, se riesci!
*/
