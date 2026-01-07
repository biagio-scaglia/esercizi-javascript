/*
    ESEMPIO PRATICO 11: Sistema Biblioteca (Classi)
    
    Biagio: "Organizziamo il mondo con le Classi."
    
    Concetti: Classi, Costruttori, Array di oggetti complessi.
*/

class Libro {
    constructor(titolo, autore, disponibile = true) {
        this.titolo = titolo;
        this.autore = autore;
        this.disponibile = disponibile;
    }

    presta() {
        if (this.disponibile) {
            this.disponibile = false;
            console.log(`Hai preso in prestito: "${this.titolo}"`);
        } else {
            console.log(`Spiacente, "${this.titolo}" è già fuori.`);
        }
    }

    restituisci() {
        this.disponibile = true;
        console.log(`Hai restituito: "${this.titolo}". Grazie!`);
    }
}

class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.catalogo = [];
    }

    aggiungiLibro(libro) {
        this.catalogo.push(libro);
        console.log(`[BIBLIOTECA] Aggiunto: ${libro.titolo}`);
    }

    cercaLibro(titolo) {
        const libroTrovato = this.catalogo.find(l => l.titolo.includes(titolo));
        return libroTrovato;
    }

    mostraDisponibili() {
        console.log(`--- Libri disponibili in ${this.nome} ---`);
        const disponibili = this.catalogo.filter(l => l.disponibile);
        disponibili.forEach(l => console.log(`- ${l.titolo} (di ${l.autore})`));
    }
}


// --- SIMULAZIONE ---

const miaBiblioteca = new Biblioteca("Biblioteca Comunale di Biagio");

// Creiamo libri
const libro1 = new Libro("Il Signore degli Anelli", "J.R.R. Tolkien");
const libro2 = new Libro("Harry Potter", "J.K. Rowling");
const libro3 = new Libro("1984", "George Orwell");

// Aggiungiamo alla biblioteca
miaBiblioteca.aggiungiLibro(libro1);
miaBiblioteca.aggiungiLibro(libro2);
miaBiblioteca.aggiungiLibro(libro3);

console.log("\n");

// Un utente cerca un libro
const risultato = miaBiblioteca.cercaLibro("Harry");
if (risultato) {
    risultato.presta(); // Prende Harry Potter
}

console.log("\n");

// Un altro utente prova a prendere lo stesso
risultato.presta();

console.log("\n");

// Vediamo cosa è rimasto
miaBiblioteca.mostraDisponibili();
