const container = document.querySelector('#container');
container.classList.add('container');

const createGrid = function() {
    for (let index = 0; index < 16; index++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        document.getElementById('grid').appendChild(container);    
    }
}

console.log(createGrid);