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
    this.classList.add('colored');
    
}

createGrid(16);

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseenter', colorGrid));