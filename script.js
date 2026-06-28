const questions = [

{
question:"Which language is used for web page structure?",
answers:[
{text:"HTML",correct:true},
{text:"CSS",correct:false},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which language is used for styling?",
answers:[
{text:"HTML",correct:false},
{text:"Java",correct:false},
{text:"CSS",correct:true},
{text:"Python",correct:false}
]
},

{
question:"Which language adds interactivity?",
answers:[
{text:"C++",correct:false},
{text:"JavaScript",correct:true},
{text:"SQL",correct:false},
{text:"PHP",correct:false}
]
},

{
question:"Which tag creates a hyperlink?",
answers:[
{text:"<img>",correct:false},
{text:"<div>",correct:false},
{text:"<h1>",correct:false},
{text:"<a>",correct:true}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Microsoft",correct:false},
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Apple",correct:false}
]
},

{
question:"Which CSS property changes text color?",
answers:[
{text:"color",correct:true},
{text:"text-color",correct:false},
{text:"font-color",correct:false},
{text:"background",correct:false}
]
},

{
question:"Which HTML tag is used to create a form?",
answers:[
{text:"<input>",correct:false},
{text:"<label>",correct:false},
{text:"<form>",correct:true},
{text:"<button>",correct:false}
]
},

{
question:"Which method writes content to the browser console?",
answers:[
{text:"print()",correct:false},
{text:"console.log()",correct:true},
{text:"document.write()",correct:false},
{text:"alert()",correct:false}
]
},

{
question:"Which CSS property adds space inside an element?",
answers:[
{text:"margin",correct:false},
{text:"border",correct:false},
{text:"padding",correct:true},
{text:"spacing",correct:false}
]
},

{
question:"Which HTML tag is used to create a table row?",
answers:[
{text:"<td>",correct:false},
{text:"<th>",correct:false},
{text:"<table>",correct:false},
{text:"<tr>",correct:true}
]
},

{
question:"Which HTML tag contains metadata?",
answers:[
{text:"<body>",correct:false},
{text:"<main>",correct:false},
{text:"<head>",correct:true},
{text:"<footer>",correct:false}
]
},

{
question:"Which event occurs when a button is clicked?",
answers:[
{text:"onhover",correct:false},
{text:"onclick",correct:true},
{text:"onchange",correct:false},
{text:"onload",correct:false}
]
}
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next";
showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];
let questionNo=currentQuestionIndex+1;

questionElement.innerHTML=questionNo+". "+currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
const button=document.createElement("button");
button.textContent = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct=answer.correct;
}

button.addEventListener("click",selectAnswer);
});

}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true";

if(isCorrect){
selectedBtn.classList.add("correct");
score++;
}else{
selectedBtn.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){
button.classList.add("correct");
}

button.disabled=true;

});

nextButton.style.display="block";

}

function showScore(){

resetState();

questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;

nextButton.innerHTML="Play Again";

nextButton.style.display="block";

}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}else{

showScore();

}

}

nextButton.addEventListener("click",()=>{

if(currentQuestionIndex<questions.length){

handleNextButton();

}else{

startQuiz();

}

});

startQuiz();