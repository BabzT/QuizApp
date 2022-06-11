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
        document.querySelector(".btn").classList.remove("active")
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
        "The most common clinical manisfestation of Hodgkin's disease is?",["Enlarged liver", "Painless and enlarged lymph nodes", "Enlarged spleen", "Itching"], "Painless and enlarged lymph nodes"
    ),
    new Question(
        "The first post operative care of a client with repair of aneurysm is to assess?",["Alteration in renal perfusion", "Electrolyte imbalance", "Ineffective Cough", "Wound Infection"], "Ineffective Cough"
    ),
    new Question(
        "The following are risk factors for lower back pain EXCEPT?",["Weight loss", "Weight gain", "Repetitive lifting of heavy objects", "Poor posture"], "Weight loss"
    ),
    new Question(
        "Laboratory screening for prostatic cancer is known as?",["Postrate specific antigen", "Blood Urea Nitrogen", "Creatinine kinase", "Aspartate amino-transferase"], "Postrate specific antigen"
    ),
    new Question(
        "A client has left-sided heart failure and the nurse observes that he has orthopnoea. What is the immediate short-term goal of the treatment?",["Check the Urinary output for kidney perfusion", "Continue heparin therapy for peripheral oedema", "Assess stressors in the client life", "Decrease Venous return to the heart"], "Decrease Venous return to the heart"
    ),
    new Question(
        "The most appropriate nursing intervention for determining fliud balance in a client with end stage renal failure is?",["Weigh patient daily", "Monitor Urine specific gravity", "Monitor intake and output", "Record vital signs daily"], "Monitor intake and output"
    ),
    new Question(
        "The following are the main part of the somatic cells EXCEPT?",["Cytoplasmic membrane", "Cytoplasm", "Nucleus", "Ribosome"], "Ribosome"
    ),
    new Question(
        "The part of the bone that forms the long axis of the body is referred to as?",["Epiphysis", "Diaphysis", "Membranes", "Epiphyseal plate"], "Epiphyseal plate"
    ),
    new Question(
        "The most inferior or the brain stem is known as ?",["Cerebellum", "Pons", "Cerebrum", "Medulla Oblongata"], "Pons"
    ),
    new Question(
        "The major cause of coronary artery disease is?",["Angina pectoris", "Arteriosclerosis", "Hypertension", "Cerebrovascular accident"], "Cerebrovascular accident"
    ),
    new Question(
        "The entire group of people under study by the researcher is known as?",["Sample", "Population", "Control group", "Experimental group"], "Sample"
    ),
    new Question(
        "Which level of needs in Maslow's hierarchy include love,friends,intimacy and family?",["Esteem", "Psychological", "Safety and security", "Belonging"], "Belonging"
    ),
    new Question(
        "Lumbar puncture is a procedure in which the cerebrospinal fluid is withdrawn by means of inserting a hollow needle into the?",["Dura mater", "Arachnoid mater", "Subdura space", "Subarachnoid space"], "Subarachnoid space"
    ),
    new Question(
        "Classification of research according to time element include the following EXCEPT?",["Exoerimental research", "Descriptive research", "Historical research", "Empirical research"], "Descriptive research"
    ),
    new Question(
        "The following are bones of the middle ear EXCEPT?",["Malleus", "Stapes", "Incus", "Vestibulocochlear"], "Vestibulocochlear"
    ),
    new Question(
        "The following are Nurses Responsibilities in emergency situations EXCEPT?",["Check for respiration", "Improve Circulation", "Maintain patent airways", "Cover client with neat clothings"], "Cover client with neat clothings"
    ),
    new Question(
        "When applying bandage, the tip of the bandage is called?",["The head", "The tail", "The starting point", "The shaft"], "The tail"
    ),
    new Question(
        "Burns which involve only the outermost layer of the skin are called?",["Superficial burns", "Partial thickness burns", "Full thickness burns", "Deep burns"], "Superficial burns"
    ),
    new Question(
        "The following are components of Primary Health Care EXCEPT?",["Provision of portable water", "Treatment of complicated disease", "Family planning", "Environmental Sanitation"], "Treatment of complicated disease"
    ),
    new Question(
        "Another name for Vitamin B1 is?",["Cyanocobalamin", "Carotene", "Riboflavin", "Thiamine"], "Thiamine"
    )

];

let quiz = new Quiz(questions);

//DISPLAY QUESTION

displayQuestion();

//ADD COUNTDOWN

let time = 5;
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
