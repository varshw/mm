let currentInput = '';

function display(value) {
  if (value === 'prime' || value === 'factorial' || value === 'evenodd') {
    const inputValue = document.getElementById('display').value;
    const num = parseFloat(inputValue);

    if (!isNaN(num)) {
      switch (value) {
        case 'prime':
          document.getElementById('display').value = isPrime(num) ? 'Prime' : 'Not Prime';
          break;
        case 'factorial':
          document.getElementById('display').value = calculateFactorial(num);
          break;
        case 'evenodd':
          document.getElementById('display').value = checkOddEven(num);
          break;
        default:
          break;
      }
    } else {
      document.getElementById('display').value = 'Invalid Input';
    }
  } else {
    currentInput += value;
    document.getElementById('display').value = currentInput;
  }
}

function clearElements() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculate() {
  document.getElementById('display').value = eval(document.getElementById('display').value);
}

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function calculateFactorial(num) {
    if (num < 0) return 'Error';
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
}
  
function checkOddEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}