// START QUIZ
let startBtn = document.querySelector(".startbtn");
let quizPage = document.querySelector("#quiz");
startBtn.addEventListener("click", () => {
    document.querySelector(".startbox").style.display = "none";
    quizPage.style.display = "block";
    startCountdown()
})

// CREATE A QUIZ CLASS

class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

// CREATE A QUESTION CLASS

class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

//DISPLAY QUESTION

function displayQuestion(){
    if (quiz.isEnded()) {
        showScores();
    } else {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

//GUESS FUNCTION
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = () => {
        quiz.guess(guess);
        displayQuestion();
    }
}

// SHOW PROGRESS
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//SHOW SCORE
function showScores(){
    let quizEndHTML = 
    `
        <h1>Quiz Completed</h1>
        <h2 id = "score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
        <div class = "quiz-repeat">
            <a href = "index.html">Take Quiz Again</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML
}

//CREATE QUESTIONS

let questions = [
    new Question(
        "How Old are you?",["12", "45", "100", "20"], "20"
    ),
    new Question(
        "How Old are you?",["12", "45", "100", "20"], "20"
    ),
    new Question(
        "How Old are you?",["12", "45", "100", "20"], "20"
    ),
    new Question(
        "How Old are you?",["12", "45", "100", "20"], "20"
    ),
    new Question(
        "How Old are you?",["12", "45", "100", "20"], "20"
    )
];

let quiz = new Quiz(questions);

//DISPLAY QUESTION

displayQuestion();

//ADD COUNTDOWN

let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function (){
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60)
            if(sec < 10){
                sec = "0" + sec;
            }
            let min = Math.floor(quizTime/60) % 60;
            if(min < 10){
                min = "0" + min;
            }
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    },1000)
}
