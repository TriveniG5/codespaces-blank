const randomNumber=parseInt(Math.random()*100 +1);

const submi=document.querySelector(`subt`);
const userInput=document.querySelector(`guessField`);
const guessSlot=document.querySelector(`.guesses`);
const remaining=document.querySelector(`lastresult`);
const lowOrHi=document.querySelector(`lowOrHi`);
const startOver=document.createElement(`.resultParas`);

const p= document.createElement(`p`);

let prevGuess=[];

let numGuess=1;

let playGame=true;


if(playGame){
    submit.addEventListener(`click`,function(e) {

        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);

        validateGuess(guess);
    })

    }



function validateGuess(guess){

}

 function checkGuess(guess){

 }

 function displayGuess(guess){

 }

 function displayMessage(message){

 }

 function newGame(){

 }

 function endGame(){

 }