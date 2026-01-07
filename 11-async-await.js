/*
    Esercizi JavaScript - 11 Async & Await (Promesse)
    
    Ciao! Biagio qui. 
    JavaScript è "monofilo" (single-threaded), fa una cosa alla volta.
    Ma se deve aspettare (es. scaricare dati da internet), non si blocca!
    Usa la magia dell'Asincrono.
*/

// --- 1. Il vecchio incubo: Callbacks ---
// (Non lo scriviamo per non piangere, ma sappi che esisteva)
// setTimeout è un esempio semplice di asincronia:
console.log("1. Inizio");
setTimeout(() => {
    console.log("2. Passati 2 secondi (questo appare dopo!)");
}, 2000);
console.log("3. Fine (questo appare PRIMA del punto 2!)");


// --- 2. Le PROMISE (Promesse) ---
// "Ti prometto che ti darò un risultato... o un errore."
const promessa = new Promise((resolve, reject) => {
    let tuttoOk = true;
    if (tuttoOk) {
        resolve("Successo! Dati arrivati.");
    } else {
        reject("Errore! Connessione persa.");
    }
});

promessa
    .then(messaggio => console.log(messaggio)) // Se va bene
    .catch(errore => console.error(errore));   // Se va male


// --- 3. ASYNC / AWAIT (La rivoluzione moderna) ---
// Ci permette di scrivere codice asincrono come se fosse sincrono (lineare).

// Simuliamo una richiesta al server che ci mette 3 secondi
function scaricaDatiDaInternet() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Dati segreti scaricati: { id: 123, user: 'Biagio' }");
        }, 3000);
    });
}

async function avviaDownload() {
    console.log("...Inizio download...");

    // 'await' mette in pausa QUESTA funzione finché la promessa non è risolta.
    // Ma non blocca tutto il resto del sito!
    let dati = await scaricaDatiDaInternet();

    console.log("Fatto!");
    console.log(dati);
}

avviaDownload();

// Prova a notare che mentre scarica, il programma può fare altro.

/*
    ESERCIZIO PER TE:
    1. Crea una funzione asincrona `prendiIlCaffe`.
    2. Fai finta che ci metta 2 secondi (usa setTimeout dentro una Promise).
    3. Quando finisce stampa "Caffè pronto!".
    4. Usa await per aspettarla.
*/
