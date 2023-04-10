const quizz_btn = document.getElementById('quizz_btn')
const quiz_questions = document.getElementById('quiz_questions')

const aswerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

quizz_btn.addEventListener('click', ()=>{
    quiz_questions.classList.toggle('show')
    
})
