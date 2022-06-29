const numbers = document.querySelectorAll('.number')
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.id)
    })
})

function display(input) {
    if (screen.textContent.length >= 10) {
        return
    }
    else {
    screen.textContent = screen.textContent.concat(input);
    }
}

clear.addEventListener('click', () => {
    screen.textContent = ''
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1)
})