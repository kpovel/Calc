function calc(a, b, operator) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number') || (operator === undefined) || isNaN(a) || isNaN(b) || ((operator === 'div' || operator === 'rem') && b === 0)
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

console.log(calc(2, 0, 'rem'))