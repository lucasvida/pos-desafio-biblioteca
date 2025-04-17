"use strict";
const gridCard = document.querySelector('.grid-container');
const cadastraLivro = document.querySelector('#cadastra-livro');
const urlBase = "https://pos-desafio-biblioteca-backend-production.up.railway.app";
(async () => {
    const response = await fetch(`${urlBase}/books`);
    const dados = await response.json();
    for (const i of dados) {
        const { _id, title, date, img, isbn, editora } = i;
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
        <img src="${img}">
        <p>ID: ${_id}</p>
        <p>Nome: ${title}</p>
        <p>ISBN: ${isbn}</p>
        <p>Editota: ${editora}</p>
        <p>Data de Lançamento: ${date}</p>
        `;
        gridCard?.appendChild(newCard);
    }
})();
cadastraLivro?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = cadastraLivro;
    const obj = {
        title: form.title.value,
        img: form.img.value,
        date: Number(form.date.value),
        editora: form.editora.value,
        isbn: form.isbn.value,
    };
    console.log(obj);
    fetch(`${urlBase}/books`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    })
        .then(response => {
        if (response.ok) {
            alert("Livro Cadastrado com Sucesso");
            form.reset();
        }
        else {
            console.error('Erro ao enviar formulário');
        }
    })
        .catch(error => {
        console.error('Erro:', error);
    });
});
