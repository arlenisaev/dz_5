const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let count = 1

btnNext.onclick = () => {
    countFunc(1);
}
btnPrev.onclick = () => {
    countFunc(-1);
}

function countFunc(numb) {
    if (count === 1 && numb === -1) {
        return;
    }
    count += numb;
    getId();
}

function getId() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.comleted}</h3>
            `
        });
}
getId();