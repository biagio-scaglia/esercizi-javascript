/*
    Esercizi JavaScript - 01 Basi e Variabili
    
    Ciao! Sono Biagio. 
    Iniziamo dalle basi: come dire al computer di ricordare le cose.
    
    In JavaScript usiamo le variabili. Immagina le variabili come delle scatole
    dove puoi metterci dentro dei valori.
    
    Abbiamo 3 modi per dichiarare variabili:
    1. var (vecchio stile, meglio evitarlo se possibile)
    2. let (il nuovo standard per valori che cambiano)
    3. const (per valori che NON devono cambiare)
*/

// --- 1. Dichiarazione con LET ---
// "Ehi computer, crea una scatola chiamata 'nome' e mettici dentro 'Biagio'"
let nome = "Biagio"; 
console.log("Il mio nome è:", nome);

// Possiamo cambiare il contenuto della scatola
nome = "Biagio Scaglia";
console.log("Ora il mio nome completo è:", nome);


// --- 2. Dichiarazione con CONST ---
// "Questa scatola chiamata 'piGreco' avrà sempre questo valore. Guai a chi lo tocca!"
const piGreco = 3.14;
console.log("Il valore di Pi Greco è:", piGreco);

// Se provi a fare questo, JavaScript si arrabbia (errore!):
// piGreco = 3.14159; 


// --- 3. Tipi di Dati (Cosa possiamo mettere nelle scatole) ---

// Stringhe (Testo)
let saluto = "Ciao a tutti!"; // Puoi usare doppi apici ""
let risposta = 'Tutto bene?'; // O apici singoli ''

// Numeri (Interi o decimali, per JS sono tutti 'number')
let eta = 30;
let prezzo = 9.99;

// Booleani (Solo due valori: vero o falso)
let isJavaScriptDivertente = true;
let miPiaceLaPizzaConAnanas = false; // (Per fortuna!)

// Undefined (Una scatola che esiste, ma è vuota/non definita)
let valoreMancante;
console.log("Cosa c'è in valoreMancante?", valoreMancante); // Stampa: undefined

// Null (Una scatola che abbiamo VOLUTAMENTE lasciato vuota)
let scatolaVuota = null;

/*
    ESERCIZIO PER TE:
    1. Dichiara una variabile 'citta' con il nome della tua città.
    2. Dichiara una costante 'annoNascita' con il tuo anno di nascita.
    3. Prova a stampare tutto con console.log().
*/

// Scrivi qui sotto il tuo codice:
