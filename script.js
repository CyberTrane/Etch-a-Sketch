const container = document.querySelector('.container');

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square' + i);
        container.appendChild(square);
    }
}

createGrid();