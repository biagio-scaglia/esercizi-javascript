/*
    ESEMPIO PRATICO 03: Generatore di Password Sicure (?)
    
    Biagio: "Mai più password '123456'. Facciamole generare al computer."
    
    Concetti: Cicli (For), Stringghe, Math.random().
*/

// --- 1. Configurazione ---
const lunghezzaPassword = 12;
const caratteriPossibili = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let passwordGenerata = "";

// --- 2. Il motore di generazione ---
console.log("Generazione in corso...");

for (let i = 0; i < lunghezzaPassword; i++) {
    // Math.random() genera un numero tra 0 e 1 (es. 0.543...)
    // Lo moltiplichiamo per la lunghezza dei caratteri disponibili
    // Math.floor() arrotonda per difetto all'intero

    let indiceCasuale = Math.floor(Math.random() * caratteriPossibili.length);

    // Pesca il carattere
    let caratterePescato = caratteriPossibili.charAt(indiceCasuale);

    // Aggiungilo alla password
    passwordGenerata += caratterePescato;

    // Log di debug (opzionale, per vedere che succede)
    // console.log(`Giro ${i}: pescato ${caratterePescato}`);
}

// --- 3. Risultato ---
console.log("La tua nuova password sicura è:");
console.log(passwordGenerata);
