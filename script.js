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

function colorGrid() {
    this.classList.add('coloring');
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('coloring'));
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

const changeButton = document.querySelector('.change');
changeButton.addEventListener('click', userInput);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

/* const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseenter', () => {
    button.classList.add('buttonHover');
})); */
/* buttons.forEach(button => button.addEventListener('mouseleave', () => {
    button.classList.remove('buttonHover');
})); */