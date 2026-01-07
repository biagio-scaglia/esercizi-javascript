/*
    Esercizi JavaScript - 02 Operatori e Logica
    
    Eccoci qua! Biagio alla tastiera.
    Ora che abbiamo le scatole (variabili), vediamo come farci i calcoli
    e come prendere decisioni.
*/

// --- 1. Operatori Matematici ---
let x = 10;
let y = 5;

console.log("Somma:", x + y);       // 15
console.log("Sottrazione:", x - y); // 5
console.log("Moltiplicazione:", x * y); // 50
console.log("Divisione:", x / y);   // 2
console.log("Resto (Modulo):", x % 3); // 1 (perché 10 diviso 3 fa 3 con resto 1)

// Incremento (Aumentare di 1)
let contatore = 0;
contatore++; // ora è 1
contatore += 5; // scorciatoia per: contatore = contatore + 5; (ora è 6)
console.log("Contatore:", contatore);


// --- 2. Operatori di Confronto (Rispondono VERO o FALSO) ---
let numeroMagico = 7;

console.log("È uguale a 7?", numeroMagico == 7);    // true
console.log("È diverso da 10?", numeroMagico != 10); // true
console.log("È maggiore di 5?", numeroMagico > 5);   // true
console.log("È minore o uguale a 7?", numeroMagico <= 7); // true

// ATTENZIONE: '==' vs '==='
// '==' controlla solo il valore (è un po' pigro)
// '===' controlla valore E tipo (è severo ma giusto, USA SEMPRE QUESTO!)
console.log("Confronto pigro:", 5 == "5");   // true (ma uno è numero, l'altro testo!)
console.log("Confronto severo:", 5 === "5"); // false (Bravo JS!)


// --- 3. Operatori Logici (Unire più confronti) ---
let hoFame = true;
let hoSoldi = true;

// AND (&&) - Entrambi devono essere veri
if (hoFame && hoSoldi) {
    console.log("Vado a comprare un panino!");
}

// OR (||) - Basta che uno sia vero
let èSabato = false;
let èDomenica = true;

if (èSabato || èDomenica) {
    console.log("È il weekend, si riposa!");
}

// NOT (!) - Inverte il risultato
let piove = false;
if (!piove) {
    console.log("Non piove, usciamo!");
}

/*
    ESERCIZIO PER TE:
    1. Dichiara due variabili: 'voto' (numero) e 'presenzaMinima' (booleano).
    2. Scrivi una logica (su carta o a mente per ora) che dice:
       "Se il voto è >= 18 E la presenzaMinima è true, allora 'Promosso', altrimenti 'Bocciato'".
    3. Usa console.log per stampare il risultato di un confronto (es. voto >= 18 && presenzaMinima).
*/
