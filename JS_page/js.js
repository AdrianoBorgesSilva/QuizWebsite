const quizz_btn = document.getElementById('quizz_btn')
const quiz_questions = document.getElementById('quiz_questions')


quizz_btn.addEventListener('click', ()=>{
    quiz_questions.classList.toggle('show')
    
})

