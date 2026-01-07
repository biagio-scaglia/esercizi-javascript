/*
    Esercizi JavaScript - 10 ES6 Features Moderni
    
    Ciao! Biagio qui.
    JavaScript si è evoluto molto nel 2015 (ES6).
    Queste sono le scorciatoie che usiamo tutti i giorni oggi.
*/

// --- 1. Template Literals (Stringhe super) ---
// Invece di "Ciao " + nome + "!", usiamo i backticks ``
let prodotto = "iPhone";
let prezzo = 999;
let messaggio = `Il prodotto ${prodotto} costa ${prezzo} euro.`;
console.log(messaggio);


// --- 2. Destructuring (Spacchettare le cose) ---
// Estrarre dati da oggetti e array in modo veloce.

// Oggetti
const utente = { nome: "Anna", citta: "Roma", anni: 25 };
// Vecchio modo: let nome = utente.nome;
// Nuovo modo:
const { nome, citta } = utente;
console.log(nome, "vive a", citta);

// Array
const coordinate = [10, 20, 30];
const [x, y] = coordinate; // Prende i primi due
console.log("Coordinate:", x, y);


// --- 3. Spread Operator ... (Spargere il contenuto) ---
// "Prendi tutto quello che c'è dentro e spalmalo qui"

let numeriA = [1, 2, 3];
let numeriB = [4, 5, 6];

// Unire array:
let tuttiINumeri = [...numeriA, ...numeriB];
console.log("Unione:", tuttiINumeri); // [1, 2, 3, 4, 5, 6]

// Copiare oggetti (molto utile in React/Redux)
let utenteBase = { nome: "Biagio", attivo: true };
let utenteAggiornato = { ...utenteBase, attivo: false, livello: 2 };
// Crea una copia e sovrascrive 'attivo', aggiunge 'livello'.
console.log("Utente aggiornato:", utenteAggiornato);


// --- 4. Rest Operator ... (Il resto della roba) ---
// Raccoglie gli argomenti extra in un array
function sommaTutti(...numeri) {
    return numeri.reduce((tot, n) => tot + n, 0);
}
console.log("Somma totale:", sommaTutti(1, 2, 3, 4, 10)); // 20

/*
    ESERCIZIO PER TE:
    1. Hai due oggetti: `infoBase = {modello: "Panda"}` e `infoMotore = {cavalli: 69}`.
    2. Crea un nuovo oggetto `macchina` unendo i due usando lo spread operator `...`.
    3. Stampa il risultato.
*/
