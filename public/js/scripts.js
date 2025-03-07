const quizData = [
    {
        question: "How much water do we waste by leaving the tap on while brushing?",
        a: "1 gallon",
        b: "3 gallons",
        c: "5 gallons",
        correct: "b",
    },
    {
        question: "Which is more water-efficient?",
        a: "Showering",
        b: "Bathing",
        c: "Neither",
        correct: "a",
    },
    {
        question: "What should you do when you brush your teeth?",
        a: "Leave the water running",
        b: "Turn off the water while brushing",
        c: "Brush without toothpaste",
        correct: "b",
    },
    {
        question: "What is a smart way to help save water on a rainy day?",
        a: "Collect rainwater in a bucket for plants",
        b: "Run inside and forget about it",
        c: "Use the garden hose instead",
        correct: "a",  
    },
    {
        question: "What can you use instead of a house to clean your bike or toys to save water?",
        a: " A sponge and a bucket of water",
        b: "A full garden hose",
        c: "A power washer",
        correct: "a",  
    },
    {
        question: "How can taking a shorter shower help the environment?",
        a: "It uses more water",
        b: " It wastes water",
        c: " It saves water and energy",
        correct: "c",
    },
    {
        question: "Which of these is a fun way to learn about saving water?",
        a: " Splashing water around for no reason",
        b: "Running water for fun",
        c: "Watching water-saving cartoons or videos",
        correct: "c",
    },
    {
        question: "Which of these methods can help save water in gardening?",
        a: "Watering plants during the hottest part of the day",
        b: "Watering plants early in the morning or late evening",
        c: "Using a sprinkler during windy days",
        correct: "b",  
    },
    {
        question: "Which household appliance typically uses the most water?",
        a: "Washing machine",
        b: "Refrigerator",
        c: "Air conditioner",
        correct: "a",
    },
    {
        question: "Which of the following practices saves the most water when washing dishes?",
        a: "Letting the water run continuously",
        b: "Using a dishwasher with a full load",
        c: "Washing dishes by hand with water running",
        correct: "b",
    },
  
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div>
            <h2>${currentQuizData.question}</h2>
            <label><input type="radio" name="answer" value="a">${currentQuizData.a}</label><br>
            <label><input type="radio" name="answer" value="b">${currentQuizData.b}</label><br>
            <label><input type="radio" name="answer" value="c">${currentQuizData.c}</label><br>
        </div>
    `;
    submitButton.classList.remove("hidden");
}

submitButton.addEventListener("click", () => {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.value;
        }
    });

    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        quizContainer.classList.add("hidden");
        submitButton.classList.add("hidden");
        scoreDisplay.classList.remove("hidden");
        scoreDisplay.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    }
});

loadQuiz();
