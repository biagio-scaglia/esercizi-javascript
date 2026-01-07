/*
    Esercizi JavaScript - 07 Oggetti
    
    Ciao! Sempre Biagio.
    Se gli array sono liste ordinate, gli Oggetti sono "pacchetti" di informazioni
    con delle etichette (chiavi).
    Sono utilissimi per descrivere cose del mondo reale (una persona, un'auto, un post di un blog).
*/

// --- 1. Creare un Oggetto ---
const persona = {
    nome: "Biagio",
    cognome: "Rossi",
    eta: 30,
    hobbies: ["Calcio", "Coding", "Pizza"], // Un oggetto può contenere array!
    indirizzo: {                            // E anche altri oggetti!
        via: "Roma",
        citta: "Milano"
    }
};

// --- 2. Accedere ai Dati ---
console.log("Nome:", persona.nome);       // Metodo col punto (dot notation)
console.log("Cognome:", persona["cognome"]); // Metodo con parentesi (bracket notation)
console.log("Primo hobby:", persona.hobbies[0]);
console.log("Città:", persona.indirizzo.citta);


// --- 3. Modificare e Aggiungere ---
persona.eta = 31; // Buon compleanno!
persona.lavoro = "Developer"; // Aggiungiamo una nuova proprietà al volo

console.log("Persona aggiornata:", persona);


// --- 4. Metodi negli Oggetti ---
// Un oggetto può anche fare delle azioni (funzioni dentro oggetti = metodi).
const auto = {
    marca: "Fiat",
    modello: "Panda",
    accendi: function () {
        console.log("Vrum vrum! La " + this.marca + " " + this.modello + " è partita!");
    }
};

// 'this' è una parola magica che significa "questo oggetto qui".
auto.accendi();

/*
    ESERCIZIO PER TE:
    1. Crea un oggetto 'smartphone' con proprietà: marca, modello, prezzo, e gigabytes.
    2. Aggiungi un metodo 'chiama' che stampa "Sto chiamando...".
    3. Stampa il modello e chiama il metodo.
*/
