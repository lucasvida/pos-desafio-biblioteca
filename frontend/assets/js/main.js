"use strict";
const gridCard = document.querySelector('.grid-container');
const urlBase = "https://pos-desafio-biblioteca-backend-production.up.railway.app";
(async () => {
    const response = await fetch(`${urlBase}/books`);
    const dados = await response.json();
    for (const i of dados) {
        const { _id, title, date, img, isbn, editora } = i;
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
        <p>ID: ${_id}</p>
        <p>${title}</p>
        <p>${img}</p>
        <p>${isbn}</p>
        <p>${editora}</p>
        <p>${date}</p>
        `;
        gridCard?.appendChild(newCard);
    }
})();
