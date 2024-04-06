
const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

<!--Score question index & Keep Score -->
let currentQuestionIndex = 0;
let score = 0;

<!--To start the quiz and set the score to zero -->
function startQuiz () {
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion ();
}