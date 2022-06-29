let numbers = document.querySelectorAll('.number')
const screen = document.querySelector('#screen')

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