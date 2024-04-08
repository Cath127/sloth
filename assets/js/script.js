//Get DOM Elements
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text')); // This converts the choices text from an Html collection to an array

//Variables
let currentQuestion = {};
let acceptingAnswers = false;  //To create a delay - Do I need this?
let score = 0;  //Always starts at zero
let questionCounter = 0; //What questions you are on
let availableQuestions = [];  //Copy of full question set and take questions out as we use them to always find a unique question - DO I need this?

//Let used for questions so the order can be random
let questions = [
    {
        question: "What is the average lifespan of sloths in the wild?",
        choice1: "15-20 years",
        choice2: "20-25 years",
        choice3: "30-35 years",
        choice4: "40-45 years",
        answer: 2,
    },
    {
        question: "How many hours does it take for a sloth to digest a meal?",
        choice1: "6-8 hours",
        choice2: "12-24 hours",
        choice3: "36-48 hours",
        choice4: "72-96 hours",
        answer: 3,
    },
    {
        question: "How many hours can a sloth eat each day?",
        choice1: "up to 2 hours",
        choice2: "up to 4 hours",
        choice3: "up to 6 hours",
        choice4: "up to 8 hours",
        answer: 3,
    },
    {
        question: "How heavy is a newborn sloth?",
        choice1: "1-2 pounds",
        choice2: "3-5 pounds",
        choice3: "6-8 pounds",
        choice4: "9-11 pounds",
        answer: 1,
    },
    {
        question: "Who is a natural sloth predator?",
        choice1: "elephants",
        choice2: "crocodiles",
        choice3: "gorillas",
        choice4: "jaguars",
        answer: 4,
    },
    {
        question: "Where are sloths found in the wild?",
        choice1: "Africa",
        choice2: "Asia",
        choice3: "Australia",
        choice4: "Central and South America",
        answer: 4,
    },
    {
        question: "How many hours a day do sloths sleep?",
        choice1: "8-10 hours",
        choice2: "10-12 hours",
        choice3: "12-14 hours",
        choice4: "14-16 hours",
        answer: 3,
    },
    {
        question: "How many chambers does a sloth stomach have?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 2,
    },
    {
        question: "Which sense is the best for sloths?",
        choice1: "smell",
        choice2: "taste",
        choice3: "touch",
        choice4: "sight",
        answer: 1,
    },
    {
        question: "What is the main diet of sloths?",
        choice1: "insects",
        choice2: "meat",
        choice3: "fish",
        choice4: "leaves",
        answer: 4,
    },
];

//CONSTANT
const CORRECT_BONUS = 10;  //How much a right question is worth
const MAX_QUESTIONS = 3; // How many questions does a user get - Dont need this

//START GAME
startGame = () => {
    questioncounter = 0; //Make sure the counter is starting at zero - probably is so may not need this
    score = 0;
    availableQuestions = [...questions];  //To get questions - don't need this
    console.log(availableQuestions);
    getNewQuestion();
};

//TO ADD 1 TO THE ANSWERS WHEN CORRECT
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);  //To get a random question - may need to put it somewhere else
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];  //To get the right answer using data number
    });

    availableQuesions.splice(questionIndex, 1); //Gets rid of the question - may not need this
    acceptingAnswers = true; //Allows user to answer
}; 

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        // console.log(e.target);
        if (!acceptingAnswers) return;  //If not ready for the player to click the answer

        acceptingAnswers = false;  //To make a delay
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    }); 
});

startGame();