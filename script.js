const numbers = document.querySelectorAll('.number')
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
const currentOperand = parse.float(screen.textContent)
const add = document.querySelector('#add')
let previousOperand = ''
let operation = ''

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.id)
    })
})

function display(input) {
    if (screen.textContent.length >= 10) {
        return;
    }
    else {
    screen.textContent = screen.textContent.concat(input);
    }
}

clear.addEventListener('click', () => {
    screen.textContent = ''
    previousOperand = ''
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1)
})

add.addEventListener('click', () => {
    if (previousOperand != '') {
        
    }
})

function operate(firstOperand, secondOperand) {
    if (operation === 'addition') {
        addition(firstOperand, secondOperand);
    }
}