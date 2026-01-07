/*
    Esercizi JavaScript - 04 Cicli (Loops)
    
    Ciao! Biagio qui. 
    A volte dobbiamo ripetere la stessa cosa tante volte. 
    Invece di scrivere 100 righe di codice a mano, usiamo i cicli!
    È come dire al computer: "Fai questa cosa finché non ti dico basta".
*/

// --- 1. Il ciclo FOR (Classico) ---
// Struttura: (inizio; condizione per continuare; cosa fare dopo ogni giro)
console.log("--- Conta da 1 a 5 con FOR ---");

for (let i = 1; i <= 5; i++) {
    console.log("Numero:", i);
}
// i++ significa i = i + 1.


// --- 2. Il ciclo WHILE (Finché...) ---
// Utile quando non sai esattamente quanti giri devi fare, ma sai la condizione.
console.log("--- Esempio WHILE ---");

let benzina = 10;
while (benzina > 0) {
    console.log("La macchina cammina... Carburante:", benzina);
    benzina = benzina - 3; // Consumiamo benzina
}
console.log("Benzina finita! Ci fermiamo.");


// --- 3. Il ciclo DO...WHILE (Fai almeno una volta) ---
// È come il while, ma esegue il codice ALMENO una volta prima di controllare.
console.log("--- Esempio DO...WHILE ---");

let passwordInserita = false;
do {
    console.log("Richiesta password... (simuliamo che l'utente la inserisca)");
    // Qui ci sarebbe il codice per chiedere la password
    passwordInserita = true; // Fingiamo che l'abbia messa giusta
} while (!passwordInserita);


// --- 4. FOR...OF (Il moderno, per liste e array) ---
// È comodissimo per scorrere liste di cose. Lo vedremo meglio con gli Array.
console.log("--- Esempio FOR...OF (su una stringa) ---");

let parola = "CIAO";
for (let lettera of parola) {
    console.log(lettera);
}

/*
    ESERCIZIO PER TE:
    1. Scrivi un ciclo FOR che stampa la tabellina del 2 (da 2 a 20).
    2. Scrivi un ciclo WHILE che stampa "Conto alla rovescia: N" partendo da 10 fino a 0.
*/
