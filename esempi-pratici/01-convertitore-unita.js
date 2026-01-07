/*
    ESEMPIO PRATICO 01: Convertitore di Unità
    
    Biagio: "Iniziamo con qualcosa di utile. Trasformiamo i numeri!"
    
    Concetti: Variabili, Operatori Matematici (/, *), Template Literals.
*/

// --- 1. Impostiamo i dati di partenza ---
let chilometri = 150;
let gradiCelsius = 25;


// --- 2. Logica di conversione ---
// Fattore di conversione: 1 Km = 0.621371 Miglia
const fattoreMiglia = 0.621371;

// Formula: °F = (°C * 9/5) + 32
const fattoreFahrenheit = 9 / 5;
const offsetFahrenheit = 32;


// --- 3. Eseguiamo i calcoli ---
let miglia = chilometri * fattoreMiglia;
let fahrenheit = (gradiCelsius * fattoreFahrenheit) + offsetFahrenheit;


// --- 4. Risultati al mondo ---
console.log("--- Convertitore Universale di Biagio ---");

// Uso .toFixed(2) per non avere troppi numeri decimali (es. 12.34 invece di 12.34567)
console.log(`${chilometri} Km corrispondono a ${miglia.toFixed(2)} Miglia.`);
console.log(`${gradiCelsius} °C corrispondono a ${fahrenheit.toFixed(1)} °F.`);

// Un piccolo controllo extra
if (gradiCelsius > 30) {
    console.log("Fa caldo! Ricordati di bere.");
} else {
    console.log("Temperatura accettabile.");
}
