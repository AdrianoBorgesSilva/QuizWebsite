const quizData = [
    {
        question: 'What is JavaScript?',
        a: 'JavaScript is a scripting language. It is not object-based, lightweight, cross-platform translated language. It is widely used for client-side validation',
        b: 'JavaScript is a scripting language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation',
        c: 'JavaScript is a scripting language. It is object-based, lightweight, cross-platform translated language. It is widely used for servidor-side validation',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What is the difference between == and ===?',
        a: 'The == operator checks equality only whereas === checks equality, and data type',
        b: 'There is no difference between them',
        c: 'The == operator checks equality, and data type only whereas === checks only equality',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'How to create objects in JavaScript?',
        a: 'By Scope, Array and Block',
        b: 'By Block, Set and Map',
        c: 'By object literal, instance of object and object constructor.',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What is the output of 10+20+"30" in JavaScript?',
        a: '60 JavaScript understands the "30" as an intenger',
        b: '102030 as the 30 is a string JS concat them',
        c: '3030 because 10+20 will be 30. If there is numeric value before and after +, it treats as binary ',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: "What's the difference between preventDefault() and stopPropagation()",
        a: 'preventDefault(), prevent the default behavior of an element, the other is used to stop the propagation of an event or stop the event from occurring in the bubbling or capturing phase.',
        b: 'There is no difference between them',
        c: 'preventDefault() is used in as a variable, stopPropagation() as a c',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the difference between undefined value and null value?',
        a: "Undefined value: A value that is not defined and has no keyword is known as undefined value. Null value: A value that is explicitly specified by the keyword 'null' is known as a null value.",
        b: "Undefined value: value that is explicitly specified by the keyword 'undefined', Null value: A value that is not defined and has no keyword",
        c: 'Undefined happens in a named function, Null happens in an arrow function',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the ‘this’ keyword in JavaScript?',
        a: 'The ‘this’ keyword in JavaScript refers to the currently calling scope',
        b: 'The ‘this’ keyword in JavaScript refers to the currently calling function',
        c: 'The ‘this’ keyword in JavaScript refers to the currently calling object',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What’s the difference between let and var?',
        a: 'Var is only used in arrow functions, let can be used everywhere else',
        b: 'Var keyword is scoped by function, the let keyword is scoped by a block.',
        c: 'Let keyword is scoped by function, the var keyword is scoped by a block.',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What are the arrow functions in JavaScript?',
        a: 'Arrow functions are a short and concise way of writing objects in JavaScript. The general syntax of an arrow function is: const name = ()=>{}',
        b: 'Arrow functions are a short and concise way of writing functions in JavaScript. The general syntax of an arrow function is: const name = ()=>{}',
        c: 'Arrow functions are a short and concise way of writing functions in JavaScript. The general syntax of an arrow function is: const name = {}=>()',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What ways an HTML element can be accessed in a JavaScript code?',
        a: 'getElementByClass(‘classname’), getElementById(‘idname’), getElementbyTagName(‘tagname’), querySelector()',
        b: 'getElementByScope(‘classname’), getElementById(‘idname’), getElementbyTagName(‘tagname’), querySelector()',
        c: 'getElementByClass(‘classname’), getElementById(‘idname’), getElementbyTagIndex(‘tagname’), querySelector()',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What are some of the JavaScript frameworks?',
        a: 'React, Angular, Node JS',
        b: 'Bootstrap, Foudation, Bulma',
        c: 'React, Angular, Ditritx',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is Higher Order Function',
        a: 'Higher-order functions are the functions that take functions as arguments and return them by operating on other frameworks',
        b: 'Higher-order functions are the functions that take constants as arguments and return them by operating on other functions',
        c: 'Higher-order functions are the functions that take functions as arguments and return them by operating on other functions',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What is the use of a Number object in JavaScript?',
        a: 'The JavaScript number object enables you to represent a numeric value. It may be a boolean or floating-point',
        b: 'The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point',
        c: 'The JavaScript number object enables you to represent a numeric value. It may be integer or floating-string',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What is the use of Math object in JavaScript?',
        a: 'The JavaScript math object provides several constants and methods to perform a bit operation',
        b: 'The JavaScript math object provides several constants and methods to perform a non-mathematical operation',
        c: 'The JavaScript math object provides several constants and methods to perform a mathematical operation',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What is the role of a strict mode in JavaScript?',
        a: 'The JavaScript strict mode is used to generates silent errors. It provides "use strict"; expression to enable the strict mode. This expression can only be placed as the first statement in a script or a function.',
        b: 'The JavaScript strict mode is used to generates silent errors. It provides "use strict"; expression to enable the strict mode. This expression can only be placed anywhere in a script or a function.',
        c: 'The JavaScript strict mode is used to generates silent errors. It provides "@charset use strict"; expression to enable the strict mode. This expression can only be placed as the first statement in a script or a function.',
        d: 'None of the above',
        correct: 'a',
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