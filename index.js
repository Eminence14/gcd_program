// A program to get the Greatest Common Divisor
// a = bq + r
const gimmeGCD = document.querySelector('.gcd')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

let gcd;
function getGCD(a, b) {
    const c = Math.min(a, b)
    if (c === b) {
        gcd = give_gcd(a, b)
    } else {
        gcd = give_gcd(b, a)
    }
    return gcd
}

function give_gcd(a, b) {
    for (let i = 0; i < 100; i++) {
        d = Math.trunc(a / b)
        e = a % b
        if (e === 0) {
            break;
        }
        a = b
        b = e
    }
    return b
}

gimmeGCD.addEventListener('click', () => {
    let inputA = document.getElementById('in_a').value
    let inputB = document.getElementById('in_b').value
    const newGCD = getGCD(inputA, inputB)
    if (inputA === '' || inputB === '') {
        result.textContent = 'input can\'t be null, add numbers'
    } else {
        result.textContent = `Your GCD is ${newGCD}`
    }
})

reset.addEventListener('click', () => {
    document.getElementById('in_a').value = ''
    document.getElementById('in_b').value = ''
    result.textContent = ''
})