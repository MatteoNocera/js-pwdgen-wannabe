// Chiedi il nome

const userName = prompt('What is your name')

// Chiedi il cognome

const userLastName = prompt('what is your lastname')

// Chiedi il colore preferito

const favouriteColor = prompt('Which is your favourite color?')

// Scrivi in console il risultato con il numero 23 alla fine e senza spazi

console.log(userName + userLastName + favouriteColor + '23');

// Scrivi in pagina il risultato con il numero 23 alla fine e senza spazi

document.getElementById('userinfo').innerHTML = (userName + userLastName + favouriteColor + '23')
