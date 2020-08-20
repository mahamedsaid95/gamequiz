var currentQuestion = 0;
var score = 0;
//var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var start = document.getElementById("start-btn");
var timer = document.getElementById("time");
var quiz = document.getElementById("quiz");

var timerCounter = 40;
var timerID 

var questionIndex = 0;
var totalRight = 0;
var totalWrong = 0;

var questions = [
   {
       question: "Who won the superbowl in 2015", 
       choices: [ "Patriots", "Broncos", "Vikings", "Packers"],
       correctanswer: "Patriots"
   },
   {
       question: "How many rings does Michael Jordan have?",
       choices: [ "6", "5", "3", "0"],
       correctanswer: "6"
   },
   {
       question: "What year did Adrian Peterson win MVP?", 
       choices: [ "2018", "2012", "2015", "2013"],
       correctanswer: "2012"
   },
   {
       question: "Stephen Curry and Kevin Durant won how many titles together?", 
       choices: [ "4", "3", "2", "0"],
       correctanswer: "2"
   }, 
];

start.onclick = StartQuiz;
 opt1.onclick = clickAnswer;
 opt2.onclick = clickAnswer;
 opt3.onclick = clickAnswer;
 opt4.onclick = clickAnswer;
 container.style.display = "none";  
 resultCont.style.display = "none";

function loadQuestion()  {
    var q = questions[questionIndex];
    //for (var i = 0; i < questions.length; i++){
       // var question1 = document.createElement("h3");
        //question1.textContent=questions[i].question;
        //var choicenode = document.createElement("div")

        
    
        // for (var j = 0; i < questions[i].choices.length;j++){
        //     var choices1 = document.createElement("button");
        //     console.log(questions[i].choices[j])
        //     choices1.value = questions[i].choices[j];
        //     choices1.textContent = questions[i].choices[j];
        //     choicenode.append(choices1);
            
        // }
        //question1.append(choicenode)
        //quiz.append(question1);
    

    
	 questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
     opt1.textContent = q.choices[0]
	 opt2.textContent = q.choices[1];
	 opt3.textContent = q.choices[2];
	 opt4.textContent = q.choices[3];
};
function displayTime() {
    timer.textContent = timerCounter
    timerCounter--;
    if (timerCounter <= 0){
        displayresults();
    }
}

function StartQuiz () {
    console.log("I was clocked")
    container.style.display = "block"
    start.style.display = "none";
    timerID = setInterval(displayTime, 1000);
    loadQuestion();
}
function clickAnswer(){
    var userchoice = this.getAttribute("data-value");
     if (userchoice === questions[questionIndex].answer) {
    totalRight++;
     }
     else {
         timerCounter = timerCounter -7;
         totalWrong++;
     }
     if (questionIndex < questions.length - 1) {
         questionIndex++;
         loadQuestion();
     }
     else {
         displayresults();
     }

}
    function displayresults() {
        console.log(totalRight,totalWrong);
        clearInterval(timerID);
        container.style.display = "none";  
resultCont.style.display = "block";
resultCont.textContent = "Wins:"+totalRight+" : Loss: "+totalWrong
    }
