/*
    ESEMPIO PRATICO 07: Simulazione Banca (Gestione Errori)
    
    Biagio: "I soldi sono una cosa seria. Non possiamo permettere bug qui."
    
    Concetti: try/catch, throw Error, validazione dati.
*/

let saldo = 1000;

function preleva(importo) {
    console.log(`Tentativo di prelievo: €${importo}...`);

    // 1. Validazione: L'importo deve essere positivo
    if (importo <= 0) {
        throw new Error("L'importo deve essere maggiore di zero.");
    }

    // 2. Validazione: L'importo deve essere un numero
    if (typeof importo !== "number") {
        throw new Error("Inserisci un numero valido.");
    }

    // 3. Controllo fondi
    if (importo > saldo) {
        throw new Error("Fondi insufficienti! Sei povero.");
    }

    // Se tutto va bene:
    saldo -= importo;
    console.log("Prelievo riuscito! Prendi i tuoi soldi.");
    console.log("Saldo rimanente: €" + saldo);
}


// --- TESTIAMO IL SISTEMA ---

// Caso A: Tutto ok
try {
    preleva(200);
} catch (e) {
    console.error("ERRORE:", e.message);
}

console.log("---");

// Caso B: Errore (Troppi soldi)
try {
    preleva(5000);
} catch (e) {
    // 'e.message' contiene il testo che abbiamo messo nel 'throw new Error'
    console.error("ERRORE:", e.message);
}

console.log("---");

// Caso C: Errore (Importo negativo)
try {
    preleva(-50);
} catch (e) {
    console.error("ERRORE:", e.message);
}

// Nonostante gli errori, il programma non è esploso e continua!
console.log("Fine operazioni.");
