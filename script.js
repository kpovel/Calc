function calc(operator, a, b) {
    const isNotValid = (operator === undefined) || (typeof a !== 'number') || (typeof b !== 'number') || isNaN(a) || isNaN(b) || ((operator === 'div' || operator === 'rem') && b === 0)
    if (isNotValid) {
        return 'Error'
    }
    switch (operator) {
        case 'sum':
            return a + b;
        case 'sub':
            return a - b
        case 'mult':
            return a * b
        case 'div':
            return a / b
        case 'rem':
            return a % b
        case 'exp':
            return a ** b
        default:
            return 'Unknown operation'
    }
}

console.log(calc('rem', 2, 0))