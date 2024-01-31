// quiz-app.js

// Define the quiz questions and answers
var questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is also known as the 'language of the web'?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    }
];

var currentQuestionIndex = 0;
var score = 0;

// Function to load the current question
function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    
    var currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = currentQuestion.options[i];
        var button = document.createElement('button');
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(this.textContent);
        };
        optionsElement.appendChild(button);
    }
}

// Function to check the user's answer
function checkAnswer(userAnswer) {
    var currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to display the final result
function showResult() {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = "<h2>Quiz Completed</h2><p>Your Score: " + score + " out of " + questions.length + "</p>";
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Call the startQuiz function to initialize the quiz
startQuiz();
