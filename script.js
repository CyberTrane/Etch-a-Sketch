const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('row' + i);
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.classList.add('square' + j);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

createGrid(16);