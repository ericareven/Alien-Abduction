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


let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;



// random word selection
function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
    // document.querySelector('#randomWord').innerHTML = answer
}

randomWord()
let wordsArr = answer.split('')
console.log(wordsArr)


function updateGameboard() {
    console.log(guessed)
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    document.querySelector('#randomWord').innerHTML = wordStatus
}

updateGameboard()


// console.log(randomWord)
let letterButton
const buttonElements = document.querySelectorAll('button');

function checkLetters(){
    if (wordsArr.includes(letterButton)) {
        guessed.push(letterButton)
        // console.log('y')
        updateGameboard()
    } else {
        mistakes += 1
    }
    
}


// Button event listener
buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        letterButton = element.attributes["data-key"].value
        console.log(letterButton)
        element.style.backgroundColor = 'red';
        // button.disabled = true;
        checkLetters()
    })
})

// function clickButton() {
//     button.style.backgroundColor = 'red';
//     if (randomWord.includes('a')) {
//         wordStatus.replace('_', 'a')
//     } else {
//         mistakes += 1
//     }
    
//     button.disabled = true;
// }

// let button = document.querySelector("#buttona")

// button.addEventListener("click", clickButton)

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



// function checkIfGameWon() {
//     if (wordStatus === answer) {
//         document.getElementById
//     }
// }

// function checkIfGameLost() {
//     if (wordStatus === maxWrong) {
//         document.querySelector('#randomWord').innerHTML = `The answer was ${answer}`
//         document.getElementById
//     }
// }

// function updateSpaceShip() {
//     document.getElementById(spaceShipPic).src = './images/' + mistakes + '.jpg'
// } // corresponds to images



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



/////////////////////////////////////////



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



//////////////////////////////////////////////


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