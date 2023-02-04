document.addEventListener("DOMContentLoaded", function(){


const secretWord = prompt(`Please type a 5 letter word to stump player 2. 
Hint: It is best to use words that do not have duplicate letters.`).toUpperCase()
const randomWordId = document.querySelector('#randomWord')
randomWordId.innerHTML = `${secretWord}`


    let guessed = [];
    let wordStatus = null;
    let mistakesLeft = 8;
    
    
    function instruct() {
        alert(`Player one must type a 5-letter word into the prompt to stump player two. Player two has 8 chances to guess the 5 letters in player one's wordStatus, before the alien abducts the cow!`)
    }
    
    let insButton = document.querySelector(".instructions")
    
    insButton.addEventListener("click", instruct)
    
    

    let wordsArr = secretWord.split('')
    console.log(wordsArr)
    
    
    function updateGameboard() {
        console.log(guessed)
        wordStatus = secretWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? ` ${letter} ` : ' _ ')).join('');
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
                    setTimeout(() => { // so that the spaceship can be completely built before game
                        gameOver()
                }, 1000)
                }
        }
    }
    
    function gameOver() {
        alert(`Player One Won! The word was ${secretWord}`)
        reset()
    }
    
    function checkIfGameWon() {
        if (guessed.length === 5) {
            setTimeout(()=> { // so that the alert and reset come after the full word is displayed
                alert(`Player Two Won! I guess the secret word wasn't tricky enough.`)
                reset()
            }, 1000)
        }
    }
    
    function reset() {
        document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/2player.html")
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
    


function onePlayer() {
    document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/index.html")
}

let one = document.querySelector(".one-player")

one.addEventListener("click", onePlayer)
    
    
    
})