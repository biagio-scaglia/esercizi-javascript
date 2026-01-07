/*
    Esercizi JavaScript - 14 DOM Manipulation

    Ciao! Biagio all'attacco.
    Il DOM (Document Object Model) è come JS vede la tua pagina HTML.
    È un albero di oggetti. Se vuoi cambiare il testo di un H1, devi parlare col DOM.

    NOTA: Questo codice funziona solo nel BROWSER, non qui in Node.js!
    Qui te lo spiego in teoria.
*/

// --- 1. Selezionare Elementi (Il mirino) ---
// "Ehi JS, prendimi quell'elemento con ID 'titolo'!"
// const titolo = document.getElementById("titolo");

// "Prendimi tutti i paragrafi <p>"
// const paragrafi = document.querySelectorAll("p");


// --- 2. Cambiare le cose ---
// "Cambia il testo!"
// titolo.innerText = "Benvenuti nel sito di Biagio!";

// "Cambia lo stile!"
// titolo.style.color = "red";
// titolo.style.fontSize = "50px";

// "Aggiungi una classe CSS!"
// titolo.classList.add("grande-e-grosso");


// --- 3. Creare Nuovi Elementi ---
// "Crea un nuovo div dal nulla"
// const nuovoBox = document.createElement("div");
// nuovoBox.innerText = "Sono appena nato!";

// "Attaccalo alla pagina (dentro il body)"
// document.body.appendChild(nuovoBox);


// --- 4. Event Listeners (Ascoltare l'utente) ---
// "fai qualcosa quando clicco il bottone"

// const bottone = document.querySelector(".btn-salva");

// bottone.addEventListener("click", function() {
//     console.log("Hai cliccato salva!");
//     alert("Salvato con successo!");
// });

/*
    SFIDA FINALE DA FARE NEL BROWSER:
    1. Crea un file index.html con un <button id="mioBtn">Cliccami</button> e un <h1 id="testo">Ciao</h1>.
    2. Collega uno script JS.
    3. Fai in modo che quando clicchi il bottone, il testo h1 diventi "Hai cliccato!" e cambi colore.
*/
