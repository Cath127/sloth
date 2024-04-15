let questions = [
    {
        question: "What is the average lifespan of sloths in the wild?",
    
        answers: [
          { text: "15-20 years", correct: false },
          { text: "20-25 years", correct: correct },
          { text: "30-35 years", correct: false },
          { text: "40-45 years", correct: false },
        ],
    },
    {
        question: "How many hours does it take for a sloth to digest a meal",
    
        answers: [
          { text: "6-8 hours", correct: false },
          { text: "12-24 hours", correct: false },
          { text: "36-48 hours", correct: correct },
          { text: "72-96 hours", correct: false },
        ],
    },
    {
        question: "Which of the following is true about sloths fur?",
    
        answers: [
          { text: "It is naturally blue in colour", correct: false },
          { text: "It grows in the opposite direction to other mammals", correct: correct },
          { text: "It sheds once a year", correct: false },
          { text: "It is resistant to parasites", correct: false },
        ],
    },

    {
        question: "What is the weight of a newborn sloth?",
    
        answers: [
          { text: "1-2 pounds", correct: correct },
          { text: "3-5 pounds", correct: false },
          { text: "6-8 pounds", correct: false },
          { text: "9-11 pounds", correct: false },
        ],
    },

    {
        question: "Who is a natural predator of sloths?",
    
        answers: [
          { text: "jaguars", correct: correct },
          { text: "elephants", correct: false },
          { text: "crocodiles", correct: false },
          { text: "gorillas", correct: false },
        ],
    },

    {
        question: "Where are sloths found in the wild?",
    
        answers: [
          { text: "Africa", correct: false },
          { text: "Asia", correct: false },
          { text: "Australia", correct: false },
          { text: "Central and South America", correct: correct },
        ],
    },

    {
        question: "How many hours a day do sloths sleep?",
    
        answers: [
          { text: "8-10 hours", correct: false },
          { text: "10-12 hours", correct: false },
          { text: "12-14 hours", correct: correct },
          { text: "14-16 hours", correct: false },
        ],
    },

    {
        question: "How many chambers does a sloth stomach have?",
    
        answers: [
          { text: "one", correct: false },
          { text: "two", correct: correct },
          { text: "three", correct: false },
          { text: "four", correct: false },
        ],
    },

    {
        question: "Which sense is the best for sloths?",
    
        answers: [
          { text: "sight", correct: false },
          { text: "taste", correct: false },
          { text: "touch", correct: false },
          { text: "smell", correct: correct },
        ],
    },
    {
        question: "What is the main diet of a sloth?",
    
        answers: [
          { text: "insects", correct: false },
          { text: "meat", correct: false },
          { text: "leaves", correct: correct },
          { text: "fish", correct: false },
        ],
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();