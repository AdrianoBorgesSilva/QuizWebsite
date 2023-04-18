const quizData = [
    {
        question: 'What is HTML?',
        a: 'It is a standard text formatting language which is used to create and display pages on the Web.',
        b: 'It is a programming language used to style a webpage ',
        c: 'It is a programming language used to give functionalities to a webpage',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What are Tags?',
        a: 'They are used to declare an object',
        b: 'It will tell the computer how to display the content',
        c: 'HTML tags are the keywords on a web page that define how your web browser must format and display your web page.',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Do all HTML tags have an end tag?',
        a: 'No, but they must have a sibling tag',
        b: 'Yes, otherwise the webpage will not compile',
        c: 'No, actually none of them need',
        d: 'None of the above',
        correct: 'd',
    },
    {
        question: 'What is formatting in HTML?',
        a: 'Using it you can access multiple pages in the browser, consuming less memory ',
        b: 'It is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined.',
        c: 'It is a process that will help the code compile',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'How many headings are there?',
        a: 'There are six types, but you can only use 2 per html page',
        b: 'There are six types, 5 normal and 1 assistant',
        c: 'Six types of headings which are defined with the <h1> to <h6> tags',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What hierarchy do the style sheets follow?',
        a: 'Inline style takes priority over embedded style sheets, which takes priority over external style sheets',
        b: 'External style sheets takes priority over embedded style sheets, which takes priority over Inline style',
        c: 'The hierarchy is programmed in JavaScript',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the use of a span tag?',
        a: 'Adding color on text, for adding background on text and Highlight any color text',
        b: 'Telling SASS where the web-kit is located',
        c: 'To break row, making a word stronger, putting images etc.',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What are some common lists?',
        a: '<br>,  <img>, <strong>',
        b: '<tb>, <tr>',
        c: '<section>, <div>, <h3>',
        d: 'None of the above',
        correct: 'd',
    },
    {
        question: 'What is the difference between HTML elements and tags?',
        a: 'Elements link to a external page, tags link to the same page',
        b: 'HTML elements communicate to the browser to render text. When the elements are enclosed by brackets <>, they form HTML tags',
        c: 'Tags are used to mark the end of a list, elements the end of a table',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What is semantic HTML?',
        a: 'Semantic HTML is used to mark the elements with classes',
        b: 'Semantic HTML is a encryption method, it does not let people see your page with devtools',
        c: 'Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content.',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'How to insert a copyright symbol on a browser page?',
        a: 'You can insert a copyright symbol by using ©(& copy) or ©(& #169) in an HTML file.',
        b: 'You can just write copyright',
        c: 'You have to use some JS functions to insert the symmbol',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'How to create a nested webpage in HTML?',
        a: 'You can use the tag <a>',
        b: 'You can use tables',
        c: 'The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Does a hyperlink only apply to text?',
        a: 'Yes, HTML is not advanced enough to use on other ways',
        b: 'No, you can use hyperlinks on text and images both',
        c: 'No, you can use hyperlinks on anything you want',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What is a style sheet?',
        a: 'It is a new HTML6 feature, used to style your page',
        b: 'A style sheet is used to build a consistent, transportable, and well-designed style template',
        c: 'A style sheet is used to build AI in HTML',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'How many tags can be used to separate a section of texts?',
        a: '<iframe>, only',
        b: '<bold>, <strong>',
        c: '<br>, <p>, <blockquote>',
        d: 'None of the above',
        correct: 'c',
    },
] 

const quizz_btn = document.getElementById('quizz_btn')
const quiz_questions = document.getElementById('quiz_questions')

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

quizz_btn.addEventListener('click', ()=>{
    quiz_questions.classList.toggle('show')
    
})

let currentQuiz = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz ]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

function changeColor(){
    quiz_questions.style.border = '5px solid #3f2474'
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if (answer == quizData[currentQuiz].correct){
            quiz_questions.style.border = '5px solid green'
            setTimeout(changeColor, 300)
        }else if (answer !== quizData[currentQuiz].correct){
            quiz_questions.style.border = '5px solid red'
            setTimeout(changeColor, 300)
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz_questions.style.fontFamily = 'var(--fonte)'
            quiz_questions.innerHTML = 'Refresh the page to try again'
        } 

        
    }
})