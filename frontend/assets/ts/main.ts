// const alerta = (a:string) =>{
//     return alert(a)
// }

// alerta("teste");

const gridCard = document.querySelector('grid-container');
const urlBase : string = "localhost:3002/books";

(async () => {
    const response = await fetch(urlBase);
    const dados: any[] = await response.json();
    for (const i of dados) {
        const { _id, title, date, img, isbn, editora } = i;
        console.log(_id, title, date, img, isbn, editora);
    }
})();