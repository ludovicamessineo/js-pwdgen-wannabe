// Chiedere nome all'utente
const userName = prompt('Qual è il tuo nome?');

// Chiedere cognome all'utente
const userLastName = prompt('Qual è il tuo cognome?');

// Chiedere colore preferito all'utente
const userFavouriteColor = prompt('Qual è il tuo colore preferito?');

// Concatenazione con il template literal
const message = `La tua password è: ${userName}${userLastName}${userFavouriteColor}`;

//Stampa nella pagina della password
document.getElementById('my-pwd').innerHTML = message;