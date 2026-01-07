/*
    ESEMPIO PRATICO 06: Scheda Personaggio RPG
    
    Biagio: "Incapsuliamo dati e azioni in un oggetto."
    
    Concetti: Oggetti, metodi (this), gestione stato.
*/

const eroe = {
    nome: "Aragon",
    classe: "Ranger",
    livello: 5,
    hpMassimi: 100,
    hpCorrenti: 80,
    inventario: ["Spada", "Arco", "Pozione"],

    // Metodo per mostrare lo stato
    mostraStato: function () {
        console.log(`--- ${this.nome} (Liv.${this.livello} ${this.classe}) ---`);
        console.log(`HP: ${this.hpCorrenti}/${this.hpMassimi}`);
        console.log(`Zaino: ${this.inventario.join(", ")}`);
    },

    // Metodo per subire danni
    subisciDanno: function (danni) {
        console.log(`${this.nome} subisce ${danni} danni!`);
        this.hpCorrenti -= danni;
        if (this.hpCorrenti < 0) this.hpCorrenti = 0;

        if (this.hpCorrenti === 0) {
            console.log("SEI MORTO!"); // (Dark Souls sound)
        }
    },

    // Metodo per curarsi
    usaPozione: function () {
        // Cerca pozione
        const indice = this.inventario.indexOf("Pozione");

        if (indice !== -1) {
            console.log("Glu glu glu... ti curi di 30 HP.");
            this.hpCorrenti += 30;
            if (this.hpCorrenti > this.hpMassimi) this.hpCorrenti = this.hpMassimi;

            // Rimuovi pozione
            this.inventario.splice(indice, 1);
        } else {
            console.log("Non hai pozioni!");
        }
    }
};


// --- IL GIOCO ---
eroe.mostraStato();

// Un nemico attacca!
eroe.subisciDanno(50);
eroe.mostraStato();

// Ti curi
eroe.usaPozione();
eroe.mostraStato();

// Ti curi di nuovo (ma non ne hai più)
eroe.usaPozione();
