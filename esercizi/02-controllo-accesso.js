/*
    ESERCIZIO 02: Controllo Accesso

    Biagio: "Chi può entrare nel club segreto?"
    Obiettivo: Usare IF, ELSE e Operatori Logici (&&, ||).
*/

// 1. Dichiara una variabile 'eta' e una variabile 'haPass'.
// Imposta eta = 20 e haPass = true.

// SCRIVI QUI SOTTO:



// 2. Scrivi un controllo IF:
// - SE l'età è maggiore o uguale a 18 E haPass è true:
//   Stampa "Benvenuto nel club!"
// - ALTRIMENTI:
//   Stampa "Mi dispiace, non puoi entrare."

// SCRIVI QUI SOTTO:



// 3. BONUS: Aggiungi una variabile 'nome'.
// Se il nome è "Biagio", fallo entrare a prescindere dall'età e dal pass!
// Suggerimento: (condizione_normale) OR (nome === "Biagio")

// SCRIVI QUI SOTTO:





/*
    --- SOLUZIONE ---
    
    let eta = 20;
    let haPass = true;
    let nome = "Mario";

    // Esercizio base
    if (eta >= 18 && haPass) {
        console.log("Benvenuto nel club!");
    } else {
        console.log("Accesso negato.");
    }

    // Soluzione Bonus
    if ((eta >= 18 && haPass) || nome === "Biagio") {
        console.log("Entra pure!");
    }
*/
