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


// class Game {
//     constructor(word) {
//         this.word = word;
//     }
// }


// Random Word --- not hidden
const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
const wordId = document.querySelector('#randomWord')
wordId.innerHTML = `${randomWord}`






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


// function wordSelected(wordBank){
//     let wordBankIndex = Math.floor(Math.random() * wordBank.length);
//     let word = wordBank[wordBankIndex];
//     return word;
//     }

// function incorrect(){
//     incorrectGuess =  wrongGuess.push(userSelection);
//     return incorrectGuess;
//     }




const answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}
const remainingLetters = randomWord.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
//    }

const guess = alert("Guess a letter, or click Cancel to stop playing.");

for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
     }
    }

    answerArray.join(" ")

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

function clickButton() {
    document.getElementById("buttonA").style.backgroundColor = 'red';
    // document.getElementById("buttonA").removeEventListener()
}

let buttonA = document.querySelector("#buttonA")

buttonA.addEventListener("click", clickButton)




// Do I need to duplicate the function for each button??

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