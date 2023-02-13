const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function colorGrid(e) {
    this.classList.add('coloring');
    
}

createGrid(16);

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mousedown', () => {
    squares.forEach(square => square.addEventListener('mouseover', colorGrid));
}));
squares.forEach(square => square.addEventListener('mouseup', () => {
    squares.forEach(square => square.removeEventListener('mouseover', colorGrid));
}));