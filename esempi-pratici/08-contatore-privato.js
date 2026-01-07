/*
    ESEMPIO PRATICO 08: Contatore Privato (Closures)
    
    Biagio: "Vuoi nascondere dei dati? Le Closure sono le casseforti di JS."
    
    Concetti: Funzioni che ritornano funzioni, Scope privato.
*/

function creaTornello() {
    // Questa variabile non è accessibile direttamente dall'esterno!
    let personeEntrate = 0;

    return {
        entra: function () {
            personeEntrate++;
            console.log("Una persona è entrata. (Click)");
        },

        leggiTotale: function () {
            console.log(`Totale ingressi: ${personeEntrate}`);
        },

        resetta: function () {
            console.log("Reset del contatore.");
            personeEntrate = 0;
        }
    };
}


const tornelloStadio = creaTornello();

tornelloStadio.entra();
tornelloStadio.entra();
tornelloStadio.entra();

// Qualcuno prova a barare cambiando la variabile?
// tornelloStadio.personeEntrate = 1000; // Non funziona! Aggiunge solo una proprietà inutile all'oggetto.

tornelloStadio.leggiTotale(); // Totale ingressi: 3

// Creiamo un altro tornello separato
const tornelloMuseo = creaTornello();
tornelloMuseo.entra();
tornelloMuseo.leggiTotale(); // Totale ingressi: 1 (Non interferisce con l'altro!)
