/*
    Esercizi JavaScript - 13 Oggetti Avanzati
    
    Biagio: "Sei arrivato fin qui? Sei un drago."
    Vediamo cosa c'è sotto il cofano degli oggetti.
*/

// --- 1. PROTOTYPES (L'ereditarietà "vera" di JS) ---
// In JS, ogni oggetto ha un papà (prototipo) da cui può copiare metodi.
// Questo è quello che succede dietro le quinte delle Classi.

const animale = {
    mangia: true
};

const coniglio = {
    salta: true
};

// Impostiamo animale come prototipo di coniglio
Object.setPrototypeOf(coniglio, animale);

console.log("Il coniglio salta?", coniglio.salta); // true (suo)
console.log("Il coniglio mangia?", coniglio.mangia); // true (ereditato!)


// --- 2. PROXY (L'intercettatore) ---
// Un oggetto che si mette "davanti" a un altro oggetto e controlla tutto quello che fai.
// Utile per validazione, log, trucchi magici.

const utenteReale = {
    nome: "Biagio",
    eta: 30
};

const gestore = {
    // Intercetta la LETTURA di una proprietà
    get(target, prop) {
        if (prop === "segreto") {
            return "NON PUOI LEGGERE QUESTO!";
        }
        return target[prop];
    },

    // Intercetta la SCRITTURA
    set(target, prop, valore) {
        if (prop === "eta" && typeof valore !== "number") {
            console.error("L'età deve essere un numero!");
            return false; // Blocco la modifica
        }
        target[prop] = valore;
        return true;
    }
};

const utenteSicuro = new Proxy(utenteReale, gestore);

console.log(utenteSicuro.nome); // Biagio
console.log(utenteSicuro.segreto); // NON PUOI LEGGERE QUESTO!

utenteSicuro.eta = "trenta"; // Errore: L'età deve essere un numero!
utenteSicuro.eta = 31; // OK

/*
    ESERCIZIO PER TE (DIVERTIMENTO):
    1. Crea un Proxy che ogni volta che leggi una proprietà, stampa "Hai letto la proprietà X".
    2. Provalo su un oggetto semplice.
*/
