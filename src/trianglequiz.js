const questionList = document.querySelector('.questions')
const startQuiz = document.querySelector('.startquiz')

let questions = [
    {
        question: 'If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 1150, 250, 400. Is it an acute triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?',
        answers: [
            'Equilateral', 'Isosceles', 'Right Angle traingle'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: ' If a triangle has 2 angles of 750. What is the measure of third angle in degree?',
        answers: [
            '25', '30', '15'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?',
        answers: [
            'Equilateral', 'Isosceles', 'Both'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        answers: [
            'Yes', 'No'
        ],
        correctAnswer: 'Yes'
    }

]

startQuiz.addEventListener('click', () => {
    questions.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<p>${item.question}</p>`

        item.answers.forEach(btn => {
            let button = document.createElement('button');
            button.innerText = btn;
            li.appendChild(button);
        })
        questionList.appendChild(li);               
    })
})