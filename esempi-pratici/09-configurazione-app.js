/*
    ESEMPIO PRATICO 09: Configurazione App (ES6 Power)
    
    Biagio: "Scrivere codice moderno significa scrivere meno e meglio."
    
    Concetti: Destructuring, Spread Operator, Default Parameters.
*/

// --- 1. La Configurazione di Default (Base) ---
const configDiDefault = {
    tema: "chiaro",
    lingua: "it",
    notifiche: true,
    versione: "1.0.0"
};

// --- 2. La Configurazione Utente (Personalizzata) ---
const preferenzeUtente = {
    tema: "scuro", // L'utente vuole il tema scuro
    notifiche: false // E non vuole notifiche
    // Non ha specificato lingua e versione, quindi useremo i default
};


// --- 3. Il Merge (Unione) Magico con Spread Operator ---
// Le proprietà dell'ultimo oggetto (preferenze) sovrascrivono il primo (default)
const configurazioneFinale = {
    ...configDiDefault,
    ...preferenzeUtente
};

console.log("--- CONFIGURAZIONE APP ATTIVA ---");
console.log(configurazioneFinale);


// --- 4. Usare i dati con Destructuring ---
// Invece di fare configurazioneFinale.tema, configurazioneFinale.lingua...
function avviaApp({ tema, lingua, versione }) {
    console.log(`Avvio app versione ${versione}`);
    console.log(`Imposto lingua: ${lingua.toUpperCase()}`);
    console.log(`Imposto tema: ${tema}`);
}

avviaApp(configurazioneFinale);

// Un altro trucco: Scambiare variabili senza temp
let a = "Bicchiere Vino";
let b = "Bicchiere Acqua";
console.log(`Prima: a=${a}, b=${b}`);

[a, b] = [b, a]; // MAGIA!
console.log(`Dopo: a=${a}, b=${b}`);
