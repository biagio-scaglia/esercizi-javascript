/*
    ESERCIZIO 05: Gestione Spese (Oggetti + Array + Cicli)
    
    Biagio: "Ora si fa sul serio. Gestiamo un bilancio."
    Obiettivo: Lavorare con Array di Oggetti.
*/

// Ho una lista di spese fatte questa settimana:
const spese = [
    { nome: "Pizza con gli amici", costo: 30, categoria: "Cibo" },
    { nome: "Benzina", costo: 50, categoria: "Auto" },
    { nome: "Libro JavaScript", costo: 25, categoria: "Studio" },
    { nome: "Cinema", costo: 15, categoria: "Svago" }
];

// 1. Scrivi un ciclo (for o forEach) che somma tutti i costi per trovare il totaleSpeso.
// SCRIVI QUI SOTTO:



// 2. Trova (usando filter o un ciclo) solo le spese della categoria "Cibo".
// SCRIVI QUI SOTTO:



// 3. (Avanzato) Crea una funzione 'aggiungiSpesa(nome, costo, categoria)'
// che crea un nuovo oggetto e lo aggiunge all'array 'spese'.
// Poi chiamala e stampa la nuova lista.
// SCRIVI QUI SOTTO:





/*
    --- SOLUZIONE ---
    
    // 1. Totale
    let totale = 0;
    spese.forEach(spesa => {
        totale += spesa.costo;
    });
    console.log("Totale speso:", totale); // 120

    // 2. Filtro Cibo
    let soloCibo = spese.filter(s => s.categoria === "Cibo");
    console.log("Spese cibo:", soloCibo);

    // 3. Funzione
    function aggiungiSpesa(nome, costo, categoria) {
        let nuovaSpesa = { nome: nome, costo: costo, categoria: categoria };
        spese.push(nuovaSpesa);
        console.log("Spesa aggiunta!", spese);
    }
    aggiungiSpesa("Gelato", 5, "Cibo");
*/
