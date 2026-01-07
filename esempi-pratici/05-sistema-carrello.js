/*
    ESEMPIO PRATICO 05: Sistema Carrello E-Commerce
    
    Biagio: "La cosa che costruirai più spesso nella tua vita da dev."
    
    Concetti: Array di Oggetti, push, forEach/reduce, filtri.
*/

// --- 1. Il Carrello (Stato iniziale) ---
let carrello = [
    { id: 1, prodotto: "Mouse Wireless", prezzo: 25, qta: 1 },
    { id: 2, prodotto: "Tastiera Meccanica", prezzo: 80, qta: 1 },
    { id: 3, prodotto: "Monitor 24", prezzo: 150, qta: 2 } // Ne ha presi 2!
];

console.log("--- CARRELLO INIZIALE ---");
console.table(carrello);


// --- 2. Funzione per aggiungere un prodotto ---
function aggiungiAlCarrello(nuovoProdotto) {
    // Cerchiamo se il prodotto esiste già
    let esistente = carrello.find(item => item.id === nuovoProdotto.id);

    if (esistente) {
        // Se esiste, aumentiamo solo la quantità
        esistente.qta++;
        console.log(`Aumentata quantità di: ${esistente.prodotto}`);
    } else {
        // Altrimenti aggiungiamo il nuovo oggetto
        carrello.push(nuovoProdotto);
        console.log(`Aggiunto nuovo: ${nuovoProdotto.prodotto}`);
    }
}

// Proviamo ad aggiungere roba
aggiungiAlCarrello({ id: 4, prodotto: "Cavo HDMI", prezzo: 10, qta: 1 });
aggiungiAlCarrello({ id: 1, prodotto: "Mouse Wireless", prezzo: 25, qta: 1 }); // Ne prende un altro!


// --- 3. Funzione per calcolare il totale ---
function calcolaTotale() {
    // riduciamo tutto a un singolo numero (accumulator)
    // Se reduce ti fa paura, puoi usare un ciclo for!

    let totale = 0;

    carrello.forEach(item => {
        totale += (item.prezzo * item.qta);
    });

    return totale;
}

console.log("--- RIEPILOGO ---");
console.table(carrello);
console.log("TOTALE DA PAGARE: €" + calcolaTotale());


// --- 4. Rimuovere articoli costosi (Esempio filter) ---
// "Ho pochi soldi, togli tutto quello che costa più di 100 euro"
let carrelloEconomico = carrello.filter(item => item.prezzo < 100);

console.log("--- CARRELLO ECONOMICO (Senza monitor) ---");
console.table(carrelloEconomico);
