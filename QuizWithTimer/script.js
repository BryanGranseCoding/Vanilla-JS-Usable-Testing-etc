const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Madrid", "Rome"],
        answer: 0,
        timeLimit: 26
      },
      {
        question: "What is the largest country in the world?",
        choices: ["USA", "Russia", "Canada", "China"],
        answer: 1,
        timeLimit: 30
      },
      {
        question: "What is the currency of Japan?",
        choices: ["Yen", "Dollar", "Euro", "Pound"],
        answer: 0,
        timeLimit: 16
      },
      {
        question: "What does \'HTML\' stand for",
        choices: ["Hyper Technology Message Language", "Horizontal Text Markup Line", "Hyper Text Markup Language", "Hyper Logical Tech Management Language"],
        answer: 2,
        timeLimit: 21
      }
];
const finalResult = [
    {
    status: "failed",
    src: "img/failed.gif"
    },
    {
    status: "success",
    src: "img/congrats.gif"
    },
    {
    status: "pending",
    src: "img/quiz.gif",
    },
    {
    status: "almost",
    src: "img/almost.gif",
    }

]
// DOM Elements Declarations
const questionStatement = document.querySelector('#statement');
const options = document.querySelector('#options');
const startBtn = document.querySelector('#nextQuestion');
const timerStatus = document.querySelector('#timerStatus');
const img = document.querySelector('#gifResult');
const countdownTimerSpan = document.querySelector('#countdownTimer');

//declaring timer and quiz start time
let currentQuiz = 0;
let timer = questions[currentQuiz].timeLimit; //get the time duration from the object array
const quizQuestion = questions[currentQuiz]; // get the current questions
let score = 0;
let totalQuiz = questions.length;
let clearIntervalTimer;
//let t = questions[currentQuiz].timeLimit;

//declaring function start quiz
function displayQuiz() {
timerStatus.textContent = "0:00";
const q = questions[currentQuiz];
questionStatement.classList.remove('hidden');
startBtn.classList.add('hidden');
img.classList.add('hidden');
questionStatement.textContent = q.question;
options.innerHTML = "";

q.choices.forEach((choice, index) =>{
//create dynamic button base on how many choices available in the questions.choices object array
const button = document.createElement("button");
button.textContent = choice;
 button.addEventListener("click", () =>{
     selectAnswer(index);
 });
 options.append(button);
})
console.log(quizQuestion.choices);
}

//checking the users answers and increment quiz item and score if answer is correct
function selectAnswer(index) {
const q = questions[currentQuiz];
if (index === q.answer) {
    score++;
    document.getElementById('score').textContent = score;
    //console.log("Incremented SCORE Logs:", score);
}
currentQuiz++;
if (currentQuiz < questions.length) {
    stopTimer();
    displayQuiz();
    let timer = questions[currentQuiz].timeLimit;
    clearIntervalTimer = setInterval(() =>{
       timer--;
       timerStatus.textContent = `0:${timer}`;
       console.log(`Current Quiz ARE:${currentQuiz}, Quiz Length: ${questions.length}`);
       if (timer === 0) {
           //console.log('Times Up!');
           endQuiz();
       }
       }, 1000);
} else {
    endQuiz();
}
}



//next quiz incase the timer runs out
function nextQuiz(index) {
    
}


//start quiz trigger from button
function startQuiz() {
    displayQuiz();
    clearIntervalTimer = setInterval(() =>{
    timer--;
    countdownTimerSpan.classList.remove('hidden');
    timerStatus.textContent = `0:${timer}`;
    if (timer == 0) {
        console.log('Times Up!');
        //timerStatus.classList.remove('timerunsout');
        endQuiz();
    } 
    }, 1000);
}

//function when quiz is finished
function endQuiz() {
 //to stop the timer when quiz is finished
stopTimer();
//instantiating class constructor scoreTotalQuiz
resultTimerData = new scoreTotalQuiz(score, totalQuiz);
let scoreDisplay = resultTimerData.getScore();
let totalQuizDisplayData = resultTimerData.getTotalQuiz();
console.log("Score Is: ", scoreDisplay);
console.log("Total Number of Quiz Is: ", totalQuizDisplayData);

 document.getElementById('score').textContent = scoreDisplay;
 document.getElementById('completed').textContent = totalQuizDisplayData;
 questionStatement.classList.add('hidden');
 startBtn.textContent = 'Quiz Completed!';
 startBtn.setAttribute('disabled', 'disabled');
 options.innerHTML = "";
 img.classList.remove('hidden');
 scoreDisplay >= 3 ? img.setAttribute('src', './img/congrats.gif') : img.setAttribute('src', './img/failed.gif');
 if (scoreDisplay === 2){
    img.setAttribute('src', './img/almost.gif');
 }
 countdownTimerSpan.classList.add('hidden');
}
//function to stop timer or clear Interval
function stopTimer() {
    clearInterval(clearIntervalTimer);
}

//start Quiz Now Button
startBtn.addEventListener('click', startQuiz);


//CLASS CONSTRUCTOR to get the total correct answer and total quiz
class scoreTotalQuiz {
    constructor(scoreResult, totalQuizResult){
        this.scoreResult = scoreResult;
        this.totalQuizResult = totalQuizResult;
    }

    getScore = () =>{
        //console.log(`${this.scoreResult}`);
        return this.scoreResult;
    }
    getTotalQuiz = () =>{
        //console.log(`${this.totalQuizResult}`);
        return this.totalQuizResult;
    }

}