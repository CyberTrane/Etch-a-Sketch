const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';
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

    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover', colorGrid));
}

function userInput() {
    let input = prompt('Enter New Grid Size');
    while (true) {
        if (!(Number(input))) {
            input = prompt('Not a number, try again');
        }
        else if (input > 64) {
            input = prompt('Size limit is 64, try again');
        } else if (input < 1) {
            input = prompt('Size cannot be less than 1, try again');
        } else {
            createGrid(input);
            break;
        }
    }
    
}

function colorGrid(e) {
    this.classList.add('coloring');
}

createGrid(16);

/* const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseover', colorGrid)); */
/* squares.forEach(square => square.addEventListener('mousedown', () => {
    squares.forEach(square => square.addEventListener('mousemove', colorGrid));
}));
squares.forEach(square => square.addEventListener('mouseup', () => {
    squares.forEach(square => square.removeEventListener('mousemove', colorGrid));
})); */

const button = document.querySelector('button');
button.addEventListener('click', userInput);