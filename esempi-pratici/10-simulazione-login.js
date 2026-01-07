/*
    ESEMPIO PRATICO 10: Simulazione Login (Async/Await)
    
    Biagio: "Il web è lento. Dobbiamo saper aspettare."
    
    Concetti: Async/Await, Promise, setTimeout.
*/

// --- 1. Funzioni che simulano il server (Fake API) ---

function loginUtente(username, password) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Controllo credenziali nel database...");

        setTimeout(() => {
            if (username === "admin" && password === "12345") {
                resolve({ id: 99, token: "ABC-SECRET-TOKEN" });
            } else {
                reject("Password o utente errati!");
            }
        }, 2000); // Ci mette 2 secondi
    });
}

function scaricaProfilo(token) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Scarico dati profilo con token:", token);

        setTimeout(() => {
            if (token === "ABC-SECRET-TOKEN") {
                resolve({ nome: "Biagio", ruolo: "Super Admin", livello: 9000 });
            } else {
                reject("Token non valido. Chi sei?");
            }
        }, 1500); // Ci mette 1.5 secondi
    });
}


// --- 2. Il Flusso Principale (Main) ---

async function avviaAutenticazione() {
    console.log("--- INIZIO LOGIN ---");

    try {
        // Passo 1: Login
        const datiAccesso = await loginUtente("admin", "12345");
        console.log("✅ Login effettuato! Token ricevuto.");

        // Passo 2: Profilo (usando il token di prima)
        const profilo = await scaricaProfilo(datiAccesso.token);
        console.log("✅ Profilo scaricato:", profilo);

        console.log(`Benvenuto, ${profilo.nome}!`);

    } catch (errore) {
        // Se qualcosa va storto in QUALSIASI punto, finiamo qui
        console.error("❌ ERRORE:", errore);
    }

    console.log("--- FINE PROCESSO ---");
}

avviaAutenticazione();
