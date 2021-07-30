const angleOne = document.querySelector('.angleone');
const angleTwo = document.querySelector('.angletwo');
const angleThree = document.querySelector('.anglethree');
const submitBtn = document.querySelector('.submitangle');
const output = document.querySelector('.outputofangleoftriangle');


function checkIfTriangle (one, two, three) {
    output.style.color = 'black';
    if(angleOne.value === '' || angleTwo.value === '' || angleThree.value === '') {
        output.innerText = 'Please Fill all angles properly!';
        output.style.color = 'red';
        return;
    }

    if(Math.sign(angleOne.value) === -1 || Math.sign(angleTwo.value) === -1 || Math.sign(angleThree.value) === -1) {
        output.innerText = 'Triangle angle values can\'t be negative numbers!';
        output.style.color = 'red';
        return;
    }
    
    if(Number(angleOne.value) === 0 || Number(angleTwo.value) === 0 || Number(angleThree.value) === 0) {
        output.innerText = 'Triangle angles values must be greater than zero!';
        output.style.color = 'red';
        return;
    }

    if (one + two + three === 180) {
        output.innerText = 'Yes! These angles makes a triangle.'
        console.log(typeof angleOne.value)
    } else {
        output.innerHTML = 'No! These angles won\'t make a traingle.'
    }

}

submitBtn.addEventListener('click', () => checkIfTriangle(Number(angleOne.value), Number(angleTwo.value), Number(angleThree.value)));