/*
    ESEMPIO PRATICO 12: Validatore Smart (Proxy)
    
    Biagio: "L'ultimo tocco di classe. Proteggiamo i dati."
    
    Concetti: Oggetti Avanzati, Proxy, Reflect.
*/

// --- 1. L'oggetto "indifeso" ---
const utenteRaw = {
    nome: "Biagio",
    eta: 30,
    email: "biagio@example.com"
};


// --- 2. Il Gestore (Handler) ---
// Qui definiamo le regole di protezione
const regole = {
    // Intercetta la scrittura (set)
    set(target, prop, valore) {
        console.log(`[LOG] Tentativo di modifica: ${prop} = ${valore}`);

        // Regola 1: L'età deve essere un numero positivo
        if (prop === "eta") {
            if (typeof valore !== "number" || valore < 0) {
                console.error("❌ ERRORE: L'età deve essere un numero positivo!");
                return false; // Blocca la modifica
            }
        }

        // Regola 2: L'email deve contenere una @
        if (prop === "email") {
            if (!valore.includes("@")) {
                console.error("❌ ERRORE: Email non valida!");
                return false;
            }
        }

        // Se passa i controlli, esegui la modifica
        target[prop] = valore;
        console.log("✅ Modifica accettata.");
        return true;
    },

    // Intercetta la lettura (get)
    get(target, prop) {
        // Possiamo manipolare i dati "al volo"
        if (prop === "nome") {
            return target[prop].toUpperCase(); // Restituisce sempre MAIUSCOLO
        }
        return target[prop];
    }
};


// --- 3. Creiamo il Proxy ---
const utenteSicuro = new Proxy(utenteRaw, regole);


// --- TEST ---

console.log("--- Lettura Nome (modificato dal Proxy) ---");
console.log(utenteSicuro.nome); // BIAGIO


console.log("\n--- Tentativo modifica Età (Errato) ---");
utenteSicuro.eta = "trenta"; // Errore

console.log("\n--- Tentativo modifica Età (Giusto) ---");
utenteSicuro.eta = 31; // Ok


console.log("\n--- Tentativo modifica Email (Errato) ---");
utenteSicuro.email = "biagioexample.com"; // Errore

console.log("\n--- Stato Finale ---");
console.log(utenteRaw);
