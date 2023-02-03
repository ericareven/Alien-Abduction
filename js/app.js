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
let maxWrong = 8;
let guessed = [];
let wordStatus = null;
let mistakesLeft = 8

// Play & Instruction Buttons
function play() {
    document.getElementsByClassName("play").style.visibility = hidden
    document.getElementsByClassName("instructions").style.visibility = hidden
    // document.getElementsByClassName("letter-buttons").style.visibility = visible
}

let playButton = document.querySelector(".play")

playButton.addEventListener("click", play)

function instruct() {
    alert('Use the alphabet on screen to guess each letter in the hidden 5-letter word. But be careful, 8 wrong guesses and your cow will be abducted!')
}

let insButton = document.querySelector(".instructions")

insButton.addEventListener("click", instruct)


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
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? ` ${letter} ` : ' _ ')).join('');
    document.querySelector('#randomWord').innerHTML = wordStatus
}

updateGameboard()


// console.log(randomWord)
let letterButton
const buttonElements = document.querySelectorAll('button');

function checkLetters(){
    mistakesLeft -= 1
    document.getElementById("guesses").innerHTML = `Guesses: ${mistakesLeft}`
    if (wordsArr.includes(letterButton)) {
        guessed.push(letterButton)
        // console.log('y')
        updateGameboard()
        checkIfGameWon()
    } else {
            if(mistakesLeft === 0) {
                gameOver()
            }
    }

function gameOver() {
    alert(`Game Over. The word was ${answer}`)
}
}

function checkIfGameWon() {
    if (guessed.length === 5) {
        alert('You Won!')
        setTimeout(() => {
            reset()
        }, 4000)
    }
}
function reset() {
    document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/index.html")
}


function buildSpaceship(){
    
}




// Button event listener
buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        letterButton = element.attributes["data-key"].value
        console.log(letterButton)
        element.style.backgroundColor = 'red';
        // button.disabled = true;
        checkLetters()
        element.disabled = true;
    })
})




// function checkIfGameLost() {
//     if (wordStatus === maxWrong) {
//         document.querySelector('#randomWord').innerHTML = `The answer was ${answer}`
//         document.getElementById
//     }
// }




})