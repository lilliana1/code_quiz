var start= document.getElementById('start');
var quiz= document.getElementById('quiz');
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var results = document.getElementById('results');
// var score = 0;
var questions = [
    // question 1
    {
    question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<scripting>",
        choiceB: "<javascript>",
        choiceC: "<script>",
        correct: "C"
    },
    // question 2
    {
    question: "The external JavaScript file must contain the <script> tag.",
        choiceA: "True",
        choiceB: "False",
        correct: "B"
    },
    // question 3
    {
    question: "How do you write a function in JavaScript?",
        choiceA: "function:myFunction()",
        choiceB: "function myFuction()",
        choiceC: "function = myFuction()",
        correct: "B"
    },
    // question 4
    {
    question: "How do you call a function named myFuction?",
        choiceA: "call myFunction()",
        choiceb: "call function myFuction()",
        choicec: "myFuction()",
        correct: "C"
    },
    // question 5
    {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choiceA: "if (i != 5)",
        choiceB: "if (i <> 5)",
        choiceC: "if i <> 5",
        choiceD: "if i =! 5 then",
        correct: "A"
    }
    
  ];

//   let lastQuestionIndex = question.length - 1;
//   let runningQuestionIndex = 0;

//   function renderQuestions() {
//       let q = questions[runningQuestionIndex];
//       question.innerHTML = "<p>" + q.question + "<p>";
//       choiceA.innerHTML = q.choiceA;
//       choiceB.innerHTML = q.choiceB; 
//       choiceC.innerHTML = q.choiceC;
//       choiceD.innerHTML = q.choiceD;
//   }

//   function checkAnswer(answer){
//       if(question[runningQuestionIndex].correct == answer) {
//         return("Woho!🙌🎉");
//       } else {
//           return("Wrong 😡👎");
//       }
//   }
//   if(runningQuestionIndex < lastQuestionIndex){
//     runningQuestionIndex++;
//     renderQuestions();
//   }  

  
//   let beginQuiz = function() {
//       for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(question[i].prompt)
//     if(response == questions[i].correctAnswer) {
//     alert("Correct! 🙌🎉");
//     } else {
//         alert("Wrong 😡👎");
//     }
// }
//   }
// alert(score);


  