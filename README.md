# Alien-Abduction
GA - Project One

Instruction Window
<input class='instructionsPage' img>
CSS .instructionsPage {
    display: hidden;
    }




// Amanda's game
buttonElements.forEach((element) => {
    element.addEventListener("click", function() {
    clickButton(element.attributes["letterButtons"].value)
    }); 
 });

function populateWord(key) {
   if (letter < 6) {
   wordElements[row - 1].querySelectorAll(".word")[letter - 1].innerText = key;
   letter += 1;
   }
}


//generate buttons in JS
function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
        `
            <button
                class = ""
                id = '` + letter + `'
                onClick="handleGuess('` + letter `')"
            >
                ` + letter `
            </button>
            `).join('');
        document.getElementById().innerHTML = buttonsHTML
}
generateButtons()