const formulas = document.querySelectorAll('.formulaone');
const sectionOne = document.querySelector('.formulaonedisplayed');
const sectionTwo = document.querySelector('.formulatwodisplayed');
const sectionThree = document.querySelector('.formulathreedisplayed');
const input1 = document.querySelectorAll('.input1');
const input2 = document.querySelectorAll('.input2');
const input3 = document.querySelectorAll('.input3');
const form = document.querySelectorAll('.form');
const output = document.querySelectorAll('.outputofangleoftriangle');

console.log(form[1]);

formulas.forEach(btn => {

    btn.addEventListener('click', () => {

        if(btn.innerText === 'If you have base and height length') {
            sectionOne.classList.toggle('hide');
            sectionTwo.classList.add('hide');
            sectionThree.classList.add('hide');
        } else if (btn.innerText === 'If you have length of 3 sides') {
            sectionTwo.classList.toggle('hide')
            sectionOne.classList.add('hide');
            sectionThree.classList.add('hide');
        } else if (btn.innerText === 'If you have length of 2 sides and included angle') {
            sectionThree.classList.toggle('hide')
            sectionOne.classList.add('hide');
            sectionTwo.classList.add('hide');
        } else {
            return;
        }
    })
})


form[0].addEventListener('click', () => {
    output[0].style.color = 'black';
    let base = Number(input1[0].value);
    let height = Number(input1[1].value);

    if (input1[0].value === '' || input1[1].value === '') {
        output[0].innerText = 'Please enter a value to proceed';
        output[0].style.color = 'red'
        return;
    }

    if (Math.sign(base) === -1 || Math.sign(height) === -1) {
        output[0].innerText = 'Triangles side values can\'t be negative. Enter a valid value!';
        output[0].style.color = 'red'
        return;
    }

    if (base === 0 || height === 0) {
        output[0].innerText = 'Triangles side values can\'t be zero. Enter a valid value!';
        output[0].style.color = 'red'
        return;
    }
    let calculationPart = 1/2 * (base * height);
    output[0].innerText = `Area = ${calculationPart.toFixed(2)} sq-meter`; 
})


form[1].addEventListener('click', () => {

    let a = Number(input2[0].value);
    let b = Number(input2[1].value);
    let c = Number(input2[2].value);
    output[1].style.color = 'black';

    if (input2[0].value === '' || input2[1].value === '' || input2[2].value === '') {
        output[1].innerText = 'Please enter a value to proceed';
        output[1].style.color = 'red';
        return;
    }

    if (Math.sign(a) === -1 || Math.sign(b) === -1 || Math.sign(c) === -1) {
        output[1].innerText = 'Triangles side values can\'t be negative. Enter a valid value!';
        output[1].style.color = 'red';
        return;
    }

    if (a === 0 || b === 0 || c === 0) {
        output[1].innerText = 'Triangles side values can\'t be zero. Enter a valid value!';
        output[1].style.color = 'red';
        return;
    }

    if(!((a+b)>c && (b+c)>a && (a+c)>b)) {
        output[1].innerText = 'Enter valid side lengths such that each side length should be less than sum of other two sides';
        output[1].style.color = 'red';
    }

    if((a+b)>c && (b+c)>a && (a+c)>b){
        const s=(a+b+c)/2;
        let calculationPart = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        output[1].innerText = `Area = ${calculationPart.toFixed(2)} sq-meter`; 
        }
})


form[2].addEventListener('click', () => {
      
      let first = Number(input3[0].value);
      let second = Number(input3[1].value);
      let angle = Number(input3[2].value);
      output[1].style.color = 'black';
    
      if (input3[0].value === '' || input3[1].value === '' || input3[2].value === '') {
          output[2].innerText = 'Please enter a value to proceed!';
          output[2].style.color = 'red';
          return;
      }

      if (Math.sign(first) === -1 || Math.sign(second) === -1 || Math.sign(angle) === -1) {
        output[2].innerText = 'Triangles side values can\'t be negative. Enter a valid value!';
        output[2].style.color = 'red';
        return;
      }

      if (first === 0 || second === 0 || angle === 0) {
        output[2].innerText = 'Triangles side values can\'t be zero. Enter a valid value!';
        output[2].style.color = 'red';
        return;
      }

      let calculationPart = (first * second* Math.sin(angle*Math.PI/180)) / 2;
      output[2].innerText = `Area = ${calculationPart.toFixed(2)}`;  
  })
  