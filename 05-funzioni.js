/*
    Esercizi JavaScript - 05 Funzioni
    
    Ciao! Biagio qui. 
    Le funzioni sono il cuore di JavaScript. 
    Immaginale come dei "mini-programmi" o "ricette" che puoi usare quando vuoi.
    Invece di riscrivere il codice, chiami la funzione!
*/

// --- 1. Funzione Classica ("Function Declaration") ---
function saluta(nome) {
    console.log("Ciao " + nome + ", benvenuto!");
}

// Per usarla, dobbiamo "chiamarla" o "invocarla":
saluta("Luca");
saluta("Maria");


// --- 2. Funzioni con Ritorno (Return) ---
// Alcune funzioni fanno un calcolo e ti restituiscono il risultato.
function somma(a, b) {
    let risultato = a + b;
    return risultato; // "Tieni, questo è il risultato!"
}

let totale = somma(10, 5);
console.log("Il totale è:", totale);


// --- 3. Arrow Functions (Le frecce => ) ---
// È il modo moderno e veloce di scrivere funzioni. Molto amato dai programmatori.

// Versione classica:
// function raddoppia(n) { return n * 2; }

// Versione Arrow:
const raddoppia = (n) => {
    return n * 2;
};

// Se è una sola riga, puoi scriverla ancora più breve (senza graffe e return):
const triplica = n => n * 3;

console.log("Raddoppio 4:", raddoppia(4)); // 8
console.log("Triplico 4:", triplica(4));   // 12


// --- 4. Parametri di Default ---
// Cosa succede se dimentichi un parametro? Possiamo metterne uno di default.
function cucinaPasta(tipo = "Spaghetti") {
    console.log("Sto cucinando: " + tipo);
}

cucinaPasta("Fusilli"); // Usa "Fusilli"
cucinaPasta();          // Usa "Spaghetti" (default)

/*
    ESERCIZIO PER TE:
    1. Scrivi una funzione 'calcolaAreaRettangolo' che prende base e altezza e RITORNA l'area.
    2. Trasformala in una Arrow Function.
    3. Testala con dei valori.
*/
