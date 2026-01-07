/*
    ESEMPIO PRATICO 04: La mia Libreria di Stringhe
    
    Biagio: "Creiamo degli strumenti (funzioni) per pulire e sistemare il testo."
    
    Concetti: Funzioni, Return, Metodi delle stringhe.
*/

// --- FUNZIONI (GLI STRUMENTI) ---

// 1. Rende maiuscola solo la prima lettera ("ciao mondo" -> "Ciao mondo")
function capitalizza(testo) {
    if (!testo) return ""; // Protezione se testo è vuoto
    const primaLettera = testo.charAt(0).toUpperCase();
    const resto = testo.slice(1).toLowerCase();
    return primaLettera + resto;
}

// 2. Taglia il testo se è troppo lungo e aggiunge "..."
function abbreviaTesto(testo, lunghezzaMassima) {
    if (testo.length <= lunghezzaMassima) {
        return testo;
    } else {
        return testo.slice(0, lunghezzaMassima) + "...";
    }
}

// 3. Conta quante parole ci sono (Arrow Function!)
const contaParole = (testo) => {
    // trim() toglie spazi inizio/fine
    // split(" ") divide in base agli spazi
    return testo.trim().split(/\s+/).length; // \s+ è una RegEx per "qualsiasi spazio"
};


// --- UTILIZZO (IL CANTIERE) ---

const titoloArticolo = "i segreti Di javaSCRIPT che NESSUNO ti dice";
const contenutoArticolo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.";

console.log("--- Test Funzioni ---");

// Test 1
console.log("Originale:", titoloArticolo);
console.log("Capitalizzato:", capitalizza(titoloArticolo)); // "I segreti di javascript che nessuno ti dice"

// Test 2
console.log("Anteprima contenuto:", abbreviaTesto(contenutoArticolo, 20)); // "Lorem ipsum dolor si..."

// Test 3
console.log("Numero parole nel contenuto:", contaParole(contenutoArticolo));
