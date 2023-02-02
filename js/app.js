document.addEventListener("DOMContentLoaded", function(){

// no words have duplicate letters 
const wordBank = ['alien', 'alive', 'alpha', 'awful', 'anger', 'adopt', 'after', 'bears', 'bounce', 'blink', 'baker', 'bikes', 'blame', 'break', 'brave',
'cream', 'crash', 'count', 'crush', 'chase', 'cheap', 'chalk', 'clean', 'chore', 'crave', 'drops', 'drain', 'dance', 'diner', 'dirty', 'doubt', 'dream',
'earth', 'elbow', 'extra', 'entry', 'eight', 'exist', 'edits', 'front', 'forks', 'frogs', 'faint', 'focus', 'flare', 'fancy', 'faces', 'frown', 'found', 'farms', 
'gamer', 'grape', 'gazed', 'ghost', 'girly', 'given', 'great', 'haste', 'holes', 'hound', 'hasty','hours', 'habit', 'haunt', 'harsh', 'idols', 'image', 'imply', 'index',
'jokes', 'jeans', 'joint', 'juice', 'labor', 'laces', 'laser', 'latex', 'large', 'lemur', 'learn', 'leaky', 'lefty', 'layer', 'legit', 'lemon', 'liver',
'money', 'monks', 'mango', 'nacho', 'night', 'nicer', 'noble', 'noisy', 'ocean', 'older', 'ogres', 'olive', 'plane', 'piano', 'paint', 'pools', 'party', 
'peach', 'paced', 'pound', 'queen', 'quits', 'quirk', 'quick', 'queso', 'rocks', 'ramen', 'rapid', 'reach', 'razor', 'remix', 'rhyme', 'rhino', 'ridge', 'roast',
'stain', 'salon', 'sadly', 'sauce', 'savor' ,'table', 'tangy', 'traps', 'taxis', 'teary', 'thank', 'tempo', 'under', 'unzip', 'until', 'vague', 'vapor', 'vegan', 'venom',
'white', 'weary', 'wagon', 'waist', 'wacky', 'yacht', 'yeast', 'yelps', 'zebra']

// console.log(wordBank.length) // 149 words

// class Game {
//     constructor(word) {
//         this.word = word;
//     }
// }

let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;



// var setLetter = function(x) {
//   document.getElementById('name').innerHTML += x;
// };

// random word selection
function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)];
}

randomWord()

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    document.querySelector('#randomWord').innerHTML = wordStatus
}

guessedWord()

// // letter buttons
// const keyboard = document.querySelectorAll("letterButtons")
// keyboard.addEventListener('click', (e) => {
//     e.preventDefault()
//     if(e.target.data.key === 'A') {
//         document.querySelectorAll("letterButtons").style.backgroundColor = 'red';
//     }
// })


// const buttonElements = document.querySelectorAll("letterButtons")

// buttonElements.forEach((element) => {
//     element.addEventListener('click', function() {
//         keypress(element.attributes['data-letter'].value)
//         buttonElements.style.backgroundcolor = 'red';
//         alert('clicked')
//     })
// })



function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter). setAttribute('disabled', true);

    if(answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon()
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes ++
        updateMistakes()
        updateSpaceShip()
        checkIfGameLost()
    }
    function updateMistakes() {
        getElementById('mistakes').innerHTML = mistakes;
    }
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById
    }
}

function checkIfGameLost() {
    if (wordStatus === maxWrong) {
        document.querySelector('#randomWord').innerHTML = `The answer was ${answer}`
        document.getElementById
    }
}

function updateSpaceShip() {
    document.getElementById(spaceShipPic).src = './images/' + mistakes + '.jpg'
} // corresponds to images

function playAgain() {
    mistakes = 0;
    guessed = [];
    randomWord();
    guessedWord();
    updateMistakes();
    //generateButtons();
} //play again button

// let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// let guess; //user guess
// let letters = []; //correctly guessed letters
// let wrongLetters = []; //incorrectly guessed letters
// let counter = 0; //counts correct letters
// let lives; //counts users lives


// function start() {
//     for (i = 0; i < randomWord.length; i++) {
//       letters[i] = "__";
//     }
//     document.getElementById('randomWord').innerHTML = letters.join(" ");

// }




// function checkLetter() {
//     document.onclick = function(event) {
//       guess = event.key.toLowerCase();
//       var found = false; //lets use bool to check if a letter was found
//       for (i = 0; i < word.length; i++) {
//         if (guess === word[i]) {
//           letters[i] = guess;
//           document.getElementById("answer").innerHTML = letters.join(" ");
//           found = true;
//         }
//       }
//       //now all letters have been checked, was any found
//       if (found) return; //if yes return
      
//       //wrong, lets also see if 
//       //it's not already logged, if not add it
//       //you could also then use  wrongLetters.length
//       //for working out if gueses area all used up.
//       if (wrongLetters.indexOf(guess) < 0) {
//         wrongLetters.push(guess);
//         document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
//       }
//     }
//   }



// function isLetterInWord(letter)
// {
//     for(i = 0; i < randomWord.length; i++)
//         {
//         if(letter == Word[i])
//         {
//             randomWord[i] = letter;
//             RightGuess += letter;
//             var el = document.getElementById("right");
//             el.innerHTML = "Your right guesses are:" + RightGuess;
//             win();
//         }

//         }
//     if (letter != Word[i]){
//             WrongGuess += letter;
//             var e = document.getElementById("wrong");
//             e.innerHTML = "Your wrong guesses are:" + WrongGuess;
//         }
// }
// "string".indexOf("r") > -1;



// function handleClick(event) {
//     const isButton = event.target.nodeName === "BUTTON";
//     if (isButton) {
//       //console.dir(event.target.id);
//       //console.log(isButton);
//       const buttonId = document.getElementById(event.target.id);
//       buttonId.classList.add("selected");
//     }
//     return;
//   }


// function generateAnswerDisplay(word) {
//     var wordArray = word.split("");
//     //console.log(wordArray);
//     for (var i = 0; i < answer.length; i++) {
//       if (wordArray[i] !== "-") {
//         wordDisplay.push("_");
//       } else {
//         wordDisplay.push("-");
//       }
//     }
//     return wordDisplay.join(" ");
//   }


// function guess(event) {
//     const guessWord = event.target.id;
//     const answerArray = answer.split("");
//     var counter = 0;
//     if (answer === winningCheck) {
//       livesDisplay.innerHTML = `YOU WIN!`;
//       return;
//     } else {
//       if (life > 0) {
//         for (var j = 0; j < answer.length; j++) {
//           if (guessWord === answerArray[j]) {
//             wordDisplay[j] = guessWord;
//             console.log(guessWord);
//             answerDisplay.innerHTML = wordDisplay.join(" ");
//             winningCheck = wordDisplay.join("");
//             //console.log(winningCheck)
//             counter += 1;
//           }
//         }
//         if (counter === 0) {
//           life -= 1;
//           counter = 0;
//           animate();
//         } else {
//           counter = 0;
//         }
//         if (life > 1) {
//           livesDisplay.innerHTML = `You have ${life} lives!`;
//         } else if (life === 1) {
//           livesDisplay.innerHTML = `You have ${life} life!`;
//         } else {
//           livesDisplay.innerHTML = `GAME OVER!`;
//         }
//       } else {
//         return;
//       }
//       console.log(wordDisplay);
//       //console.log(counter);
//       //console.log(life);
//       if (answer === winningCheck) {
//         livesDisplay.innerHTML = `YOU WIN!`;
//         return;
//       }
//     }
//   }
  
// container.addEventListener("click", guess);
  

// let userSelection;
// let playAgain = true;
// let chances = 7;
// let chosenWord = wordSelected(wordBank);
// let wordArray = chosenWord.split('');
// let hiddenWord = wordArray.map( x => '_');
// let firstRun = true;
// let didWin = false;
// let wrongGuess;
// let incorrectGuess = [];


/////////////////////////////////////////

// function incorrect(){
//     incorrectGuess =  wrongGuess.push(userSelection);
//     return incorrectGuess;
//     }


// const answerArray = [];
//     for (let i = 0; i < randomWord.length; i++) {
//     answerArray[i] = "_";
// }
// const remainingLetters = randomWord.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
//    }

//////////////////////////////////////////////

// const guess = alert("Guess a letter, or click Cancel to stop playing.");

// for (let j = 0; j < randomWord.length; j++) {
//         if (randomWord[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//      }
//     }

//     answerArray.join(" ")

// Play & Instruction Buttons
// function play() {
//     document.getElementsByClassName("play")
// }

// let playButton = document.querySelector(".play")

// playButton.addEventListener("click", play)

// function instruct() {
//     document.getElementsByClassName("instructions")
// }

// let insButton = document.querySelector(".instructions")

// insButton.addEventListener("click", instruct)



// Button click event

// function clickButton() {
//     document.querySelectorAll(".letterButtons").style.backgroundColor = 'red';
//     // document.getElementById("buttonA").removeEventListener()
// }

// let buttons = document.querySelector(".letterButtons")

// buttons.addEventListener("click", clickButton)



// Do I need to duplicate the function for each button??

//////////////////////////////////////////////

function clickButtonA() {
    buttonA.style.backgroundColor = 'red';
    // if(Element.style.backgroundColor === 'red'){
    //     document.getElementById("buttonA").removeEventListener()
    // }
}

let buttonA = document.querySelector("#buttonA")

buttonA.addEventListener("click", clickButtonA)

///////////////////////////////////////////////////

// function clickButtonB() {
//     document.getElementById("buttonB").style.backgroundColor = 'red';
//     // document.getElementById("buttonA").removeEventListener()
// }

// let buttonB = document.querySelector("#buttonB")

// buttonB.addEventListener("click", clickButtonB)



// function clickButtons() {
//     document.getElementsByClassName("letterButtons").style.backgroundColor = 'red'
// }

// let buttons = document.querySelector(".letterButtons")

// buttons.addEventListener("click", clickButtons)




// Class notes
// // WITHOUT EVENT PROPAGATION
// const buttons = document.querySelectorAll(".js-button")
// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', (e)=>{
//         e.preventDefault()
//         alert('You clicked a button!')
//     })
// }

// // 3 PHASES OF EVENT PROPAGATION
// // 1. CAPTURE PAHSE --- navigation of the DOM until the target is reached, aka the Target Phase
// // 2. TARGET PHASE --- secure the target ( eg. targetting an <li> with an event listener)
// // 3. BUBBLE PHASE --- once we have the target, we work our way back up through the DOM
// // it is a lot easier to target 1 parent, rather than 100 children

// // WITH EVENT PROPAGATION
// const controlPanel = document.querySelector(".control-panel")
// controlPanel.addEventListener('click', (e) => {
//     e.preventDefault()
//     if(e.target.tagName === 'A') {
//         alert('You clicked a button!')
//     }
// })





})