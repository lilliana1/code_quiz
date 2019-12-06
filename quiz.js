  
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");




// create our questions
let questions = [
    //original question #1
    // choices dont appear 
    // {
    //     question: "Inside which HTML element do we put the JavaScript?",
    //     choiceA: "<scripting>",
    //     choiceB: "<javascript>",
    //     choiceC: "<script>",
    //     correct: "C"
    // },
     // new question #1
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "Both the <head> section and the <body> section are correct",
        choiceB: "The < head > section",
        choiceC: "The < body > section",
        correct: "A"
    },
    //question #2
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choiceA: "True",
        choiceB: "False",
        choiceC: "🤔",
        correct: "B"
    },
    //question #3
    {
        question: "How do you write a function in JavaScript?",
        choiceA: "function: myFunction()",
        choiceB: "function myFuction()",
        choiceC: "function = myFuction()",
        correct: "B"
    },
    //question #4
    {
        question: "How do you call a function named myFuction?",
        choiceA: "call myFunction()",
        choiceB: "call function myFuction()",
        choiceC: "myFuction()",
        correct: "C"
    },
    //question #5
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choiceA: "if (i != 5)",
        choiceB: "if (i <> 5)",
        choiceC: "if i <> 5",
        correct: "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    // choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    // hides paragraph of instructions
    instructions.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        // answerIsCorrect();
    }else {
        // answer is wrong
        // change progress color to red
        // answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion);
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    // let img = (scorePerCent >= 80) ? "img/5.png" :
    //           (scorePerCent >= 60) ? "img/4.png" :
    //           (scorePerCent >= 40) ? "img/3.png" :
    //           (scorePerCent >= 20) ? "img/2.png" :
    //           "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}


















