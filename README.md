# Alien-Abduction
GA - Project One

Instruction Window
<input class='instructionsPage' img>
CSS .instructionsPage {
    display: hidden;
    }

click button html
<button onclick="clickButton()">Click me</button>


// Amanda's game
buttonElements.forEach((element) => {
    element.addEventListener("click", function() {
    (element.attributes["letterButtons"].value)
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



JS Buttons
let html = '';
let c;
for (let i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

<div id="box"></div>
<div id="name"></div>  