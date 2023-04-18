const quizData = [
    {
        question: 'What is CSS?',
        a: 'CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites',
        b: 'CSS stands for Closed Secret System. It is a framework used to style multiple pages in just one',
        c: 'CSS is not used anymore, intead we use JavaScript',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is universal sector?',
        a: 'Universal selector is a selector that matches elements from different pages',
        b: "A universal selector is a selector that matches any element type's name instead of selecting elements of a particular type",
        c: 'Universal selector is used as a reference for the Angular framework to stlye a page like React ',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What are the elements of the CSS Box Model?',
        a: 'Color, padding, margin',
        b: 'Size, font-family, font-weight',
        c: 'Padding, border and margin',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Differentiate between CSS3 and CSS2.',
        a: 'CSS3 supports many browsers and also is a object-oriented programming',
        b: 'CSS2 and CSS3 do not have many differences',
        c: 'The main difference is CSS3 divides different sections into modules and supports many browsers',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'How can CSS be integrated into an HTML page?',
        a: 'Using style tags in the UTF-8 section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag',
        b: 'Using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag ',
        c: 'Using style tags in the head section, using inline-styling, writing CSS in a React file, and linking into the HTML page by the link tag',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'Explain a few advantages of CSS.',
        a: 'With CSS, different documents can be controlled using a single site, styles can be grouped in complex situations using selectors and grouping methods, and multiple HTML elements can have classes',
        b: "With CSS, different documents can be controlled using a single site, styles can be grouped in complex situations using selectors and grouping methods, and multiple HTML elements can have id's",
        c: 'With CSS, different documents can be controlled using a single web-kit, styles can be grouped in complex situations using selectors and grouping methods, and multiple HTML elements can have classes',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the difference between a class and an ID?',
        a: 'ID is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas Class is unique and it can be assigned to a single element',
        b: 'There is no difference between them',
        c: 'Class is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas ID is unique and it can be assigned to a single element',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Define z-index.',
        a: 'Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take both negative and positive values',
        b: 'Z-index is used to specify the stack order of elements that overlap each other. Its default value is one and can take both negative and positive values',
        c: 'Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take only positive values',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'How can you target h3 and h2 with the same styling?',
        a: 'Multiple elements can be targeted by separating with a colon: h2:h3 {color: red;}',
        b: 'Multiple elements can be targeted by separating with a comma: h2, h3 {color: red;}',
        c: 'Multiple elements can be targeted by separating with a point: h2. h3 {color: red;}',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'Explain responsive web design.',
        a: 'Responsive Design is a web page creation approach that uses diferent pages, flexible layouts, and CSS media queries',
        b: 'Responsive Design is a web page programming approach that uses flexible softwares, flexible layouts, and CSS media queries',
        c: 'Responsive Design is a web page creation approach that uses flexible images, flexible layouts, and CSS media queries',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What are the limitations of CSS?',
        a: 'CSS cannot style a HTML page, that is why we use Javascript',
        b: 'CSS cannot always assure compatibility with every browser; you need to be cautious while choosing the style selector',
        c: 'CSS cannot select many elements at once, does not have compatibility with every browser, but you do not need to be cautious',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What are the different types of Selectors in CSS?',
        a: 'Universal Selector, Element type Selector, ID selector, Class selector, Descendant combinatory, Child Combinator, General Sibling Combinator, Adjacent sibling combinator, and Attribute selector.',
        b: 'Universal Selector, Element type Selector, Parameter selector, Class selector, Descendant combinatory, Child Combinator, General Sibling Combinator, Scope sibling combinator, and Attribute selector.',
        c: 'ID and Class selectors, only',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the difference between inline, and block?',
        a: "Block Elements usually start on the same line and can take space for an entire row or width. Inline elements start on a new line",
        b: "Block Elements usually start on a new line and can take space for an entire row or width. Inline elements don't start on a new line. However, they appear on the same line as the content and tags beside them",
        c: 'Block elements are the render parameters, whlie inline elements are the scope parameter',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'What are Pseudo classes?',
        a: 'Pseudo-classes are the type of pseudo-elements that don’t exist in a normal document tree',
        b: 'Pseudo-classes are the type of pseudo-elements that exist in a normal document tree',
        c: 'Pseudo-classes are the type of elements that don’t exist in a normal document tree',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'What is the use of % unit?',
        a: 'The rest of the division',
        b: 'Concat',
        c: 'It is not CSS',
        d: 'None of the above',
        correct: 'd',
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