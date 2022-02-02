/* prova commento!! */
// stabilisco che in a ci sarà una stringa di testo
let a = "persona sconosciuta"

// creo la funzione saluto
function saluto() {
    console.log("Saluti, " + a + "! Stai osservando i log della pagina.");
}

// qui chiamo la funzione saluto
saluto();
//
//
//

// prova di addizione
console.log("Forse un'addizione so farla... quanto fa 5+6?");

function addizione(x, y) {
    return x + y;
}

// stabilisco io che x è 5 e y è 6

x = 5;
y = 6;

// ora chiamo la funzione addizione che sommerà x e y
let result = addizione(x, y);

// metto un log con la risposta
console.log("Risposta: " + result);