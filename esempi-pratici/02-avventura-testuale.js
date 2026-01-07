/*
    ESEMPIO PRATICO 02: Avventura Testuale
    
    Biagio: "Creiamo una storia interattiva (o quasi)."
    
    Concetti: If/Else, Switch, Variabili di stato.
*/

console.log("--- BENVENUTO NEL CASTELLO OSCURO ---");

// --- 1. Stato del giocatore ---
let inventario = ["torcia", "chiave"];
let salute = 100;
let stanzaCorrente = "ingresso";

// --- 2. Scelta del giocatore (Simuliamo un input) ---
// Prova a cambiare questa variabile in: "biblioteca", "sotterranei", "torre"
let sceltaGiocatore = "sotterranei";


// --- 3. Gestione della scena (Switch) ---
switch (sceltaGiocatore) {
    case "ingresso":
        console.log("Sei nell'ingresso. C'è un'aria gelida.");
        break;

    case "biblioteca":
        console.log("Tanti libri polverosi. Forse c'è un passaggio segreto?");
        if (inventario.includes("lente")) {
            console.log("Con la tua lente trovi un indizio!");
        } else {
            console.log("Non vedi nulla di particolare. Ti servirebbe una lente.");
        }
        break;

    case "sotterranei":
        console.log("È buio pesto qui sotto.");
        if (inventario.includes("torcia")) {
            console.log("Accendi la torcia. Vedi un forziere!");
            // Evento speciale
            if (inventario.includes("chiave")) {
                console.log("Hai usato la chiave! Hai trovato 500 monete d'oro!");
            } else {
                console.log("Il forziere è chiuso a chiave. Peccato.");
            }
        } else {
            console.log("Non vedi nulla. Inciampi e ti fai male.");
            salute = salute - 20;
            console.log("Salute rimanente:", salute);
        }
        break;

    default:
        console.log("Non puoi andare lì. Scegli una direzione valida.");
}

console.log("--- FINE TURNO ---");
