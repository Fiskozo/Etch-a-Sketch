const container = document.querySelector('#container');
container.classList.add('container');

let numberOfGrid = 256

const createGrid = function() {
    for (let index = 0; index < numberOfGrid; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        container.appendChild(newDiv); 
    }
} 
createGrid();
