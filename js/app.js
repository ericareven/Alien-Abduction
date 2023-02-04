document.addEventListener("DOMContentLoaded", function(){

// no words have duplicate letters 
const wordBank = ['alien', 'alive', 'alpha', 'awful', 'anger', 'adopt', 'after', 'bears', 'bounce', 'blink', 'baker', 'bikes', 'blame', 'break', 'brave',
'cream', 'crash', 'count', 'crush', 'chase', 'cheap', 'chalk', 'clean', 'chore', 'crave', 'drops', 'drain', 'dance', 'diner', 'dirty', 'doubt', 'dream',
'earth', 'elbow', 'extra', 'entry', 'eight', 'exist', 'edits', 'front', 'forks', 'frogs', 'faint', 'focus', 'flare', 'fancy', 'faces', 'frown', 'found', 'farms', 
'gamer', 'grape', 'gazed', 'ghost', 'girly', 'given', 'great', 'haste', 'holes', 'hound', 'hasty','hours', 'habit', 'haunt', 'harsh', 'idols', 'image', 'imply', 'index',
'jokes', 'jeans', 'joint', 'juice', 'labor', 'laces', 'laser', 'latex', 'large', 'lemur', 'learn', 'leaky', 'lefty', 'layer', 'legit', 'lemon', 'liver',
'money', 'monks', 'mango', 'nacho', 'night', 'nicer', 'noble', 'noisy', 'ocean', 'older', 'ogres', 'olive', 'plane', 'piano', 'paint', 'pools', 'party', 
'peach', 'paced', 'pound', 'quits', 'quirk', 'quick', 'queso', 'rocks', 'ramen', 'rapid', 'reach', 'razor', 'remix', 'rhyme', 'rhino', 'ridge', 'roast',
'stain', 'salon', 'sadly', 'sauce', 'savor' ,'table', 'tangy', 'traps', 'taxis', 'teary', 'thank', 'tempo', 'under', 'unzip', 'until', 'vague', 'vapor', 'vegan', 'venom',
'white', 'weary', 'wagon', 'waist', 'wacky', 'yacht', 'yeast', 'yelps', 'zebra']

// console.log(wordBank.length) // 149 words

let answer = '';
let guessed = [];
let wordStatus = null;
let mistakesLeft = 8;


function instruct() {
    alert('Use the alphabet below to guess each letter in the hidden 5-letter word. But be careful, 8 wrong guesses and your cow will be abducted!')
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
const buttonElements = document.querySelectorAll('#letter');

function checkLetters(){
    if (wordsArr.includes(letterButton)) {
        guessed.push(letterButton)
        // console.log('y')
        updateGameboard()
        checkIfGameWon()
    } else {
        mistakesLeft -= 1
        document.getElementById("guesses").innerHTML = `Guesses: ${mistakesLeft}`
        buildSpaceship()
            if(mistakesLeft === 0) {
                abductCow()
                setTimeout(() => { // so that the spaceship can be completely built before game over
                    gameOver()
            }, 1000)
            }
    }
}

function gameOver() {
    alert(`Game Over. The word was ${answer}
Let's play again!`)
    reset()
}

function checkIfGameWon() {
    if (guessed.length === 5) {
        // cowWins()
        setTimeout(()=> { // so that the alert and reset come after the full word is displayed
            alert(`You Won! Let's play again!`)
            reset()
        }, 1000)
    }
}

function reset() {
    // document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/index.html")
    document.location = "/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/2player.html"
}

// Build space ship with each wrong guess
function buildSpaceship(){
    if(mistakesLeft === 7) {
        document.getElementById('pic-one').style.visibility = 'visible'
    } else if(mistakesLeft === 6) {
        document.getElementById('pic-two').style.visibility = 'visible'
    } else if(mistakesLeft === 5) {
        document.getElementById('pic-three').style.visibility = 'visible'
    } else if(mistakesLeft === 4) {
        document.getElementById('pic-four').style.visibility = 'visible'
    } else if(mistakesLeft === 3) {
        document.getElementById('pic-five').style.visibility = 'visible'
    } else if(mistakesLeft === 2) {
        document.getElementById('pic-six').style.visibility = 'visible'
    } else if(mistakesLeft === 1) {
        document.getElementById('pic-seven').style.visibility = 'visible'
    } else if(mistakesLeft === 0) {
        document.getElementById('pic-eight').style.visibility = 'visible'
        document.getElementById('pic-nine').style.visibility = 'visible'
    }
}

let elem = document.querySelector(".animal");
function abductCow() {
  elem.style.transform = "translate(0,-100px)"
  elem.style.opacity = "0%"
}

// function cowWins() {
//     elem.style.transition = ".5s"
//     elem.style.transform = "translate(0,-100px)"
//     window.setTimeout(() => {
//         elem.style.transform = "translate(0,0)"
//     },1000 / 500)
    
// }

// Button event listener
buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        letterButton = element.attributes["data-key"].value
        console.log(letterButton)
        // element.style.backgroundColor = 'red';
        checkLetters()
        element.disabled = true;
    })
})


function twoPlayer() {
    document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/2player.html")
}

let two = document.querySelector(".two-player")

two.addEventListener("click", twoPlayer)




})