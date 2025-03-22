const quizData = [
    {
        question: "How much water do we waste by leaving the tap on while brushing?",
        a: "1 gallon",
        b: "3 gallons",
        c: "5 gallons",
        correct: "b",
    },
    {
        question: "How much less water do millets require compared to rice, making them a viable alternative in water-stressed areas? (Rice requires 8,000 liters per kg, sugar requires 28,000 liters per kg)",
        a: "30% less water",
        b: "50% less water",
        c: "70% less water",
        correct: "c",
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
        question: "What can you use instead of a hose to clean your bike or toys to save water?",
        a: "A sponge and a bucket of water",
        b: "A full garden hose",
        c: "A power washer",
        correct: "a",
    },
    {
        question: "How can taking a shorter shower help the environment?",
        a: "It uses more water",
        b: "It wastes water",
        c: "It saves water and energy",
        correct: "c",
    },
    {
        question: "Which of these is a fun way to learn about saving water?",
        a: "Splashing water around for no reason",
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
const userAnswers = [];

// Get elements
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");
const correctAnswersDisplay = document.getElementById("correct-answers");
const progressBar = document.getElementById("progress");
const feedbackDisplay = document.getElementById("feedback");
const backButton = document.getElementById("back-button");

// Create water drop animation
function createWaterDrops() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const drop = document.createElement("div");
            drop.classList.add("water-drop");
            drop.style.left = Math.random() * window.innerWidth + "px";
            drop.style.animationDuration = (Math.random() * 3 + 3) + "s";
            document.body.appendChild(drop);
            
            // Remove drop after animation completes
            setTimeout(() => {
                document.body.removeChild(drop);
            }, 6000);
        }, i * 300);
    }
}

// Load quiz question
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    
    // Update progress bar
    const progressPercentage = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = progressPercentage + "%";
    
    // Create question HTML
    quizContainer.innerHTML = `
        <div class="question-container">
            <h2>${currentQuestion + 1}. ${currentQuizData.question}</h2>
            <label class="quiz-option"><input type="radio" name="answer" value="a">${currentQuizData.a}</label>
            <label class="quiz-option"><input type="radio" name="answer" value="b">${currentQuizData.b}</label>
            <label class="quiz-option"><input type="radio" name="answer" value="c">${currentQuizData.c}</label>
        </div>
    `;
    
    feedbackDisplay.classList.add("hidden");
}

// Check answer and show feedback
function checkAnswer() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.value;
        }
    });

    // If no answer selected
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return false;
    }

    userAnswers.push(selectedAnswer);

    // Show feedback
    feedbackDisplay.classList.remove("hidden");
    
    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
        feedbackDisplay.className = "correct-feedback";
        feedbackDisplay.textContent = "Correct! 💧";
        // Create water drops animation for correct answers
        createWaterDrops();
    } else {
        feedbackDisplay.className = "incorrect-feedback";
        feedbackDisplay.textContent = "Incorrect. The correct answer was " + 
            quizData[currentQuestion][quizData[currentQuestion].correct];
    }

    // Disable further answers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.style.pointerEvents = "none";
    });

    // Change submit button to "Next Question"
    submitButton.textContent = "Next Question";
    submitButton.onclick = nextQuestion;
    
    return true;
}

// Move to next question
function nextQuestion() {
    currentQuestion++;

    // Reset button
    submitButton.textContent = "Submit";
    submitButton.onclick = function() {
        if (checkAnswer()) {
            // Button functionality changes in checkAnswer
        }
    };

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    quizContainer.classList.add("hidden");
    submitButton.classList.add("hidden");
    feedbackDisplay.classList.add("hidden");
    scoreDisplay.classList.remove("hidden");
    correctAnswersDisplay.classList.remove("hidden");
    backButton.classList.remove("hidden");
    
    // Update progress bar to 100%
    progressBar.style.width = "100%";

    // Calculate percentage score
    const percentage = Math.round((score / quizData.length) * 100);
    
    // Show score with animation
    scoreDisplay.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${quizData.length} (${percentage}%)</p>
    `;

    // Display all answers
    correctAnswersDisplay.innerHTML = "<h3>Answer Review:</h3>";
    quizData.forEach((item, index) => {
        const userAnswer = userAnswers[index] ? item[userAnswers[index]] : "No answer";
        const correctAnswer = item[item.correct];
        const isCorrect = userAnswers[index] === item.correct;
        
        correctAnswersDisplay.innerHTML += `
            <p>
                <strong>Q${index + 1}:</strong> ${item.question}<br>
                <span style="color: ${isCorrect ? '#2e7d32' : '#c62828'}">
                    Your answer: ${userAnswer}
                    ${isCorrect ? ' ✓' : ' ✗'}
                </span><br>
                <span style="color: #2e7d32">Correct answer: ${correctAnswer}</span>
            </p>
        `;
    });

    // Create many water drops for the final celebration
    createWaterDrops();
    setTimeout(createWaterDrops, 1000);
    setTimeout(createWaterDrops, 2000);
    
    // Back button functionality
    backButton.onclick = () => {
        window.location.href = "index.html";
    };
}

// Initialize the quiz
function initQuiz() {
    loadQuiz();
    submitButton.onclick = function() {
        if (checkAnswer()) {
            // Button functionality changes in checkAnswer
        }
    };
}

// Start the quiz when the page loads
window.onload = initQuiz;
