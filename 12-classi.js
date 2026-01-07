/*
    Esercizi JavaScript - 12 Classi
    
    Ciao! Biagio qui. 
    Quando JS vuole fare il serio e imitare linguaggi come Java o C#, usa le CLASSI.
    Servono per creare "stampini" per oggetti tutti uguali.
*/

// --- 1. Definire una Classe ---
class Animale {
    // Il costruttore viene chiamato quando "nasce" il nuovo oggetto
    constructor(nome, verso) {
        this.nome = nome;
        this.verso = verso;
    }

    // Metodo condiviso da tutti gli animali
    faiVerso() {
        console.log(`${this.nome} fa: ${this.verso}`);
    }
}


// --- 2. Creare Istanze (Usare lo stampino) ---
const cane = new Animale("Bobby", "Bau!");
const gatto = new Animale("Luna", "Miao!");

cane.faiVerso(); // Bobby fa: Bau!
gatto.faiVerso(); // Luna fa: Miao!


// --- 3. Ereditarietà (Extends) ---
// "Un robot è un tipo speciale di Animale? Facciamo finta di sì per l'esempio"
// No, facciamo un esempio migliore: CanePolice "estende" Animale
class CanePoliziotto extends Animale {
    constructor(nome, grado) {
        // 'super' chiama il costruttore del genitore (Animale)
        super(nome, "WOOF WOOF (Polizia!)");
        this.grado = grado;
    }

    arrestaCriminale() {
        console.log(`${this.nome} (Grado: ${this.grado}) sta arrestando il ladro!`);
    }
}

const rex = new CanePoliziotto("Rex", "Sergente");
rex.faiVerso();         // Funziona! Ereditato da Animale
rex.arrestaCriminale(); // Funziona! Metodo solo suo.


// --- 4. Metodi Statici ---
// Funzioni della classe stessa, non del singolo oggetto.
class Calcolatrice {
    static somma(a, b) {
        return a + b;
    }
}

// Non serve fare 'new Calcolatrice()'
console.log(Calcolatrice.somma(5, 10)); // 15

/*
    ESERCIZIO PER TE:
    1. Crea una classe `Persona` con nome e cognome.
    2. Crea una classe `Studente` che estende `Persona` e aggiunge `materiaPreferita`.
    3. Fai un metodo `studia()` che stampa "Nome sta studiando Materia".
*/
