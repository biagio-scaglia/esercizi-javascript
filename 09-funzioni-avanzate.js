/*
    Esercizi JavaScript - 09 Funzioni Avanzate
    
    Ciao! Biagio mode: ON.
    Qui entriamo nel territorio dei veri pro.
    Parliamo di concetti che fanno girare la testa all'inizio: Closures e 'this'.
*/

// --- 1. CLOSURE (La scatola magica che ricorda) ---
// Una funzione dentro un'altra funzione che si "ricorda" le variabili del genitore,
// anche dopo che il genitore ha finito.

function creaContatore() {
    let conteggio = 0; // Questa variabile è "protetta" dentro la closure

    return function () {
        conteggio++;
        console.log("Contatore:", conteggio);
    };
}

const mioContatore = creaContatore();
mioContatore(); // 1
mioContatore(); // 2
mioContatore(); // 3
// Non posso accedere a 'conteggio' dall'esterno! È privato.


// --- 2. THIS (Chi sono io?) ---
// 'this' cambia significato in base a CHI chiama la funzione.

const cane = {
    nome: "Fido",
    abbaia: function () {
        // Qui 'this' è l'oggetto cane
        console.log(this.nome + " dice: Bau!");
    }
};

cane.abbaia(); // Fido dice: Bau!


// ATTENZIONE: Nelle Arrow Functions, 'this' non cambia! Rimane quello del contesto esterno.
const gatto = {
    nome: "Miao",
    miagola: () => {
        // Qui 'this' NON è l'oggetto gatto, ma (probabilmente) window/global
        console.log(this.nome + " dice: Miao..."); // undefined dice: Miao...
    }
}
gatto.miagola(); // Problema comune! Usa funzioni normali per i metodi degli oggetti.


// --- 3. Call, Apply, Bind (Manipolare 'this') ---
// Possiamo forzare il 'this' ad essere quello che vogliamo noi.

const persona1 = { nome: "Mario" };
const persona2 = { nome: "Luigi" };

function presenta(saluto) {
    console.log(saluto + ", sono " + this.nome);
}

// CALL: Chiama la funzione dicendo "usa persona1 come this"
presenta.call(persona1, "Ciao"); // Ciao, sono Mario
presenta.call(persona2, "Salve"); // Salve, sono Luigi


/*
    ESERCIZIO PER TE:
    1. Crea una funzione 'creaSaluto(nome)' che ritorna una funzione.
    2. La funzione interna deve stampare "Ciao [nome]!".
    3. Usala per creare una funzione 'salutaBiagio' e chiamala.
    4. (Questo è il concetto di Closure: la funzione interna ricorda 'nome').
*/
