// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");
const highscoresBtn = document.getElementById("highscores");


// questions to be asked
var questions = [
    //question #1
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "< scripting >",
        choiceB: "< javascript >",
        choiceC: "< script >",
        correct: "C"
    },
     //question #2
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "Both the <head> section and the <body> section are correct",
        choiceB: "The < head > section",
        choiceC: "The < body > section",
        correct: "A"
    },
    //question #3
    {
        question: "The external JavaScript file must contain the < script > tag.",
        choiceA: "True",
        choiceB: "False",
        choiceC: "🤔",
        correct: "B"
    },
    //question #4
    {
        question: "How do you write a function in JavaScript?",
        choiceA: "function: myFunction()",
        choiceB: "function myFuction()",
        choiceC: "function = myFuction()",
        correct: "B"
    },
    //question #5
    {
        question: "How do you call a function named myFuction?",
        choiceA: "call myFunction()",
        choiceB: "call function myFuction()",
        choiceC: "myFuction()",
        correct: "C"
    },
    //question #6
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choiceA: "if (i != 5)",
        choiceB: "if (i < > 5)",
        choiceC: "if i < > 5",
        correct: "A"
    }
];


// global variables
var lastQuestion = questions.length - 1;
var nextQuestions = 0;
var count = 76;
var questionTime = 75;
var TIMER;
var score = 0;

// ask a question
function makeQuestion(){
    let q = questions[nextQuestions];
    question.innerHTML = "<p>"+ q.question +"</p>";
    // user has 3 choices to pick from
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    
}

// when user click start, quiz will begin 
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    // hides paragraph of instructions
    instructions.style.display = "none";
    // hides start button
    start.style.display = "none";
    // starts making questions
    makeQuestion();
    quiz.style.display = "block";
    // time starts counting 
    countdown();
    TIMER = setInterval(countdown,1000); 
    // score 
    scoreDiv.style.display = "none";
    // hides highscore button
    highscoresBtn.style.display = "none";
}

// counter backwards
function countdown(){
    count--;
    counter.innerHTML = count;
    if (count <= 0) {
        scoreMaker()
    } 

}

// checking if answer is correct 
function checkAnswer(answer){

    if(nextQuestions < lastQuestion) {

    if(answer === questions[nextQuestions].correct){
        console.log("check", count)
    } else {
        // -15 seconds when answer is incorrect
        count = count - 15;
        counter.innerHTML = count;
    }
        nextQuestions++;
        makeQuestion();
    } 
    else {
        // end the quiz and show the score
        clearInterval(TIMER);
        counter.innerHTML = count;
        scoreMaker();
    }
}

// score maker
function scoreMaker(){
    // count = 0;
    counter.innerHTML = count;
    console.log(count)
    // asks user for initials
    var initials = prompt("What are your initials?");
    console.log(count)


    var highscoreArray = JSON.parse(localStorage.getItem("highscore"))

    if ( highscoreArray === null) {
        highscoreArray = [];
    }

    console.log(highscoreArray)

    var highscore = {
        "highscore": count,
        "initials": initials
    }

    highscoreArray.push(highscore)

    // store highscore and initials
    localStorage.setItem("highscore", JSON.stringify(highscoreArray));
    
    // score table will appear 
    scoreDiv.style.display = "block";
    
    // display score 
    scoreDiv.innerHTML += "<p> Your new score is: " + count + "</p>";
    scoreDiv.innerHTML += "<p> Your initials are: " + initials + "</p>";

    
    
}
//see highscores
function highscores() {
    var highscoreDisplay = JSON.parse(localStorage.getItem("highscore"));
    // console.log(highscoreDisplay)
    // highscore table will appear 
    scoreDiv.style.display = "block";
    //for loop to read array
    for (let i = 0; i < highscoreDisplay.length; i++) {
        var p = document.createElement("p");
        p.textContent = "Initials:  " + highscoreDisplay[i].initials + "   |  Highscore:  " + highscoreDisplay[i].highscore
        scoreDiv.appendChild(p);
    }
}

    
    
// when user click start, quiz will begin 
highscoresBtn.addEventListener("click",highscores);


















