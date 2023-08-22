// Chiedi il nome

const userName = prompt('What is your name')

// Chiedi il cognome

const userLastName = prompt('What is your lastname')

// Chiedi il colore preferito

const favouriteColor = prompt('Which is your favourite color?')



// Scrivi in console il risultato con il numero 23 alla fine e senza spazi

// console.log(userName + userLastName + favouriteColor + Number(birthDate) + '23');

// Scrivi in pagina il risultato con il numero 23 alla fine e senza spazi

// document.getElementById('userinfo').innerHTML = (userName + userLastName + favouriteColor + '23')


// BONUS FAI INSERIRE IL GIORNO DI NASCITA DA UTENTE E SOMMA AL NUMERO UN ALTRO NUMERO RANDOM da 0 a 100 NELLA PASSWORD GENERATA

const birthDate = prompt('Which is your birth date? ex. yyyymmdd')

document.getElementById('userinfo').innerHTML = (userName + userLastName + favouriteColor + Number(birthDate) + Math.floor(Math.random() * 100))

