const currentNumber = document.getElementById('currentNumber');
const fineAsw = document.querySelector('.alert-success');
const wrongAsw = document.querySelector('.alert-danger');
const nextS = document.getElementById('siguiente');
let number;
number = parseInt(currentNumber.innerHTML, 10);
// number = parseInt(currentNumber.innerHTML, 10);

// console.log(typeof currentNumber.innerHTML);
// console.log(buttonLeft.innerHTML);
// console.log(buttonRight.innerHTML);

function addNumber() {
    currentNumber.innerHTML = '';
    // console.log(number);
    number += 1;
    // console.log(number);
    currentNumber.innerHTML = number;
}

function subsNumber() {
    if (number >= 1) {
        currentNumber.innerHTML = '';
        // console.log(number);
        number -= 1;
        // console.log(number);
        currentNumber.innerHTML = number;
    }
}