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
    operation = ''
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1)
})

add.addEventListener('click', () => {
    if (previousOperand != '') {
        operate(previousOperand, currentOperand);
        operation = 'addition'
        
    }
})

function operate(firstOperand, secondOperand) {
    if (operation === 'addition') {
        screen.textContent(addition(firstOperand, secondOperand));
    }
}

function addition(firstOperand, secondOperand) {
    let sum = firstOperand + secondOperand;
    return sum;
}

function subtraction(firstOperand, secondOperand) {
    let difference = firstOperand - secondOperand;
    return difference;
}

function division(firstOperand, secondOperand) {
    let dividend = firstOperand / secondOperand;
    return dividend;
}

function multiplication(firstOperand, secondOperand) {
    let product = firstOperand * secondOperand;
    return product;
}