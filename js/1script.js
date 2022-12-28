const operation = prompt('Enter the operation (add, sub, div, mult ): ')
const firstNumber = +prompt('Enter the first number : ')
const secondNumber = +prompt('Enter the second number : ')
let result;
if(operation === '*') {
    result = firstNumber * secondNumber
    alert(`${firstNumber} * ${secondNumber} = ${result}`)
} else if(operation === '/') {
    result = firstNumber / secondNumber
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
} else if(operation === '+') {
    result = firstNumber + secondNumber
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
} else if(operation === '-') {
    result = firstNumber - secondNumber
    alert(`${firstNumber} - ${secondNumber} = ${result}`)
} else {
    alert('Unknown operation, try one more time ;c')
}