function correctAsw() {
    if (number === 2) {
        console.log('Correct');
        fineAsw.classList.remove("d-none");
        nextS.classList.remove("d-none");
        wrongAsw.classList.add("d-none");
    } else {
        console.log('Again');
        wrongAsw.classList.remove("d-none");
        fineAsw.classList.add("d-none");
        nextS.classList.add("d-none");
        number = 0;
        currentNumber.innerHTML = number;
    }
}