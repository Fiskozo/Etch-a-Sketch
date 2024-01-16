const container = document.querySelector('#container');
container.classList.add('container');

let input = 16
let numberOfGrid = input * input



const createGrid = function() {
    for (let index = 0; index < numberOfGrid; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.style.width = (500 / input) + "px"
        newDiv.style.height = (500 / input) + "px"
        container.appendChild(newDiv);
        newDiv.onmouseover = function() {
            newDiv.classList.add('hover');
      };     
    }
} 
createGrid();



