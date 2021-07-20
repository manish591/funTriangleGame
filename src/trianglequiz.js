const questionList = document.querySelector('.questions')
const startQuiz = document.querySelector('.startquiz');
const question = document.querySelectorAll('.question');
const options = document.querySelector('.options')
const submit = document.querySelector('.submitangle')


let score = 0;
let answers = ['yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no']

    options.addEventListener('click', () => {
        let i = 0;
        question.forEach(item => {
            if (options.innerText === answers[i]) {
                score++;
            }
        })
        i++;
    })


console.log(score)
