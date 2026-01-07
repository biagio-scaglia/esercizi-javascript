/*
    ESEMPIO PRATICO 13: To-Do List Interactiva
    
    Biagio: "Il JavaScript sul browser è tutta un'altra storia."
    
    Concetti: DOM Selectors, Event Listeners, Class Manipulation.
*/

console.log("Biagio: Script caricato correttamente!");

// --- 1. SELEZIONE ELEMENTI ---
const inputElement = document.getElementById("inputTask");
const btnAggiungi = document.getElementById("btnAggiungi");
const listaElement = document.getElementById("listaTask");


// --- 2. LOGICA ---

function aggiungiTask() {
    const testo = inputElement.value.trim(); // .trim() toglie spazi vuoti extra

    if (testo === "") {
        alert("Scrivi qualcosa prima, furbetto!");
        return;
    }

    // Creiamo il contenitore LI
    const li = document.createElement("li");

    // Creiamo lo span per il testo
    const span = document.createElement("span");
    span.innerText = testo;

    // Evento click sul testo: barra come completato
    span.addEventListener("click", () => {
        span.classList.toggle("fatto");
    });

    // Creiamo il pulsante elimina
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "X";
    btnDelete.className = "btn-delete";

    // Evento click su elimina
    btnDelete.addEventListener("click", () => {
        li.remove(); // Rimuove l'elemento dal DOM
    });

    // Uniamo i pezzi
    li.appendChild(span);
    li.appendChild(btnDelete);

    // Aggiungiamo alla lista nella pagina
    listaElement.appendChild(li);

    // Puliamo l'input
    inputElement.value = "";
    inputElement.focus(); // Rimetto il cursore nell'input
}


// --- 3. EVENTI ---

// Click sul bottone
btnAggiungi.addEventListener("click", aggiungiTask);

// Pressione tasto INVIO nell'input
inputElement.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        aggiungiTask();
    }
});
