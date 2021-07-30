const input1 = document.querySelectorAll('.input1');
const submitBtn = document.querySelector('.submitangle');
const output = document.querySelector('.outputofangleoftriangle');


function checkHypoteneus (valOne, valTwo) {
    output.style.color = 'black';

    if (valOne.value === '' || valTwo.value === '') {
        output.innerText = 'Please Enter a value!'
        output.style.color = 'red';
        return;
    }

    if(Number(valOne.value) === 0 || Number(valTwo.value) === 0) {
        output.innerText = 'Please Enter a value greater than zero!'
        output.style.color = 'red';
        return;
    } 

    if(Math.sign(Number(valOne.value)) === -1 || Math.sign(Number(valTwo.value)) === -1) {
        output.innerText = 'Please Enter a value greater than zero!'
        output.style.color = 'red';
        return;
    } 

    let a = Number(valOne.value);
    let b = Number(valTwo.value);
    output.innerText = Math.sqrt((a * b) + (b * a)) + 'sq-meter';
}

submitBtn.addEventListener('click', () => checkHypoteneus(input1[0], input1[1]));