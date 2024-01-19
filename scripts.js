const container = document.querySelector('#container');
container.classList.add('container');
const btn = document.querySelector('#btn')
btn.classList.add('btn')

let getInput = document.getElementById('btn').onclick = function() {
    let input = parseInt(prompt("Grid size?", "0"), 10);
    let numberOfGrid = input * input
    if (input > 100) {
        alert("No more than 100 please :D");
    }else if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          };
        for (let index = 0; index < numberOfGrid; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.style.width = (500 / input) + "px"
        newDiv.style.height = (500 / input) + "px"
        container.appendChild(newDiv);
        newDiv.onmouseover = function() {
            newDiv.classList.add('hover');
            };     
        };
    }else{
    for (let index = 0; index < numberOfGrid; index++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        newDiv.style.width = (500 / input) + "px"
        newDiv.style.height = (500 / input) + "px"
        container.appendChild(newDiv);
        newDiv.onmouseover = function() {
            newDiv.classList.add('hover');
            };     
        };
    };
};




