let triangleQuizForm = document.forms[0];
const btn = document.querySelector('.submitangle');
const questionContainer = document.querySelectorAll('.question');
const output = document.querySelector('.outputofangleoftriangle');

let score = 0;

let correctAnswer = ['answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1', 'answer-1'];

triangleQuizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionData = new FormData(triangleQuizForm);
    let i = 0;
    questionData.forEach(item => {
        console.log(item)
        if(item == correctAnswer[i]) {
            questionContainer[i].style.backgroundColor = 'lightgreen';
            score++;
        } else {
            questionContainer[i].style.backgroundColor = 'red'
        }
        i++;
    }) 
    output.innerText = `Your score is ${score}`;
})