let triangleQuizForm = document.forms[0];
const btn = document.querySelector('.submitangle');
const questionContainer = document.querySelectorAll('.question');
const output = document.querySelector('.outputofangleoftriangle');

let score = 0;

let correctAnswer = ['answer-1', 'answer-2', 'answer-2', 'answer-2', 'answer-2', 'answer-3', 'answer-3', 'answer-1', 'answer-1', 'answer-3'];
triangleQuizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const questionData = new FormData(triangleQuizForm);
    console.log(questionData.values())
    let i = 0;

    for(let entry of questionData.values()) {
        console.log(entry);
        if(entry === correctAnswer[i]) {
            questionContainer[i].style.backgroundColor = 'lightgreen';
            score++;
        } else {
            questionContainer[i].style.backgroundColor = 'red'
        }
        i++;
    }
    output.innerText = `Your score is ${score}`;
    score = 0;
    btn.style.display = 'none';
});