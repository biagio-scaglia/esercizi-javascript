/*
    Esercizi JavaScript - 06 Array e Metodi
    
    Ciao! Biagio qui. 
    Gli Array sono come delle liste della spesa ordinata.
    Puoi metterci dentro di tutto.
*/

// --- 1. Creare un Array ---
let spesa = ["Latte", "Uova", "Pane", "Biscotti"];

console.log("Cosa c'è al primo posto?", spesa[0]); // Ricorda: si conta da 0!
console.log("Quanti elementi ci sono?", spesa.length);


// --- 2. Aggiungere e Rimuovere ---
spesa.push("Mela"); // Aggiunge alla fine
console.log("Dopo push:", spesa);

spesa.pop(); // Toglie l'ultimo
console.log("Dopo pop:", spesa);


// --- 3. I Metodi "Magici" degli Array (Molto Importanti!) ---

// A. MAP (Trasforma ogni elemento) 
// "Prendi ogni numero e raddoppialo"
let numeri = [1, 2, 3, 4, 5];
let doppi = numeri.map(num => num * 2);
console.log("Numeri doppi (map):", doppi); // [2, 4, 6, 8, 10]

// B. FILTER (Filtra solo quelli che vuoi)
// "Dammi solo i numeri maggiori di 2"
let numeriGrandi = numeri.filter(num => num > 2);
console.log("Numeri > 2 (filter):", numeriGrandi); // [3, 4, 5]

// C. FIND (Trova il primo che corrisponde)
// "Dammi il primo numero pari"
let primoPari = numeri.find(num => num % 2 === 0);
console.log("Primo numero pari (find):", primoPari); // 2

// D. FOREACH (Per ogni elemento, fai qualcosa)
console.log("--- Lista Spesa ---");
spesa.forEach(item => {
    console.log("- " + item);
});

/*
    ESERCIZIO PER TE:
    1. Crea un array di numeri [10, 20, 35, 40, 55].
    2. Usa .filter() per trovare solo i numeri maggiori di 30.
    3. Usa .map() per dividere tutti i numeri per 10.
*/
