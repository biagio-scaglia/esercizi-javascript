/*
    ESERCIZIO 04: Manipolazione Array

    Biagio: "La lista della spesa serve ancora?"
    Obiettivo: Array, metodi push, map, filter.
*/

// 1. Dichiara un array 'prezzi' con questi valori: [100, 50, 20, 200, 10].
// SCRIVI QUI SOTTO:



// 2. Aggiungi il valore 60 alla fine dell'array usando push().
// SCRIVI QUI SOTTO:



// 3. Usa .filter() per creare un nuovo array 'prezziAlti' che contiene solo
// i prezzi maggiori di 50.
// SCRIVI QUI SOTTO:



// 4. Usa .map() per creare un nuovo array 'prezziIva' dove ad ogni prezzo
// aggiungi il 22% (moltiplica per 1.22).
// SCRIVI QUI SOTTO:





/*
    --- SOLUZIONE ---
    
    let prezzi = [100, 50, 20, 200, 10];
    prezzi.push(60);
    console.log("Prezzi:", prezzi); // [100, 50, 20, 200, 10, 60]

    let prezziAlti = prezzi.filter(p => p > 50);
    console.log("Prezzi Alti:", prezziAlti); // [100, 200, 60]

    let prezziIva = prezzi.map(p => p * 1.22);
    console.log("Con IVA:", prezziIva);
*/
