// A program to get the Greatest Common Divisor
// a = bq + r

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
