# Alien-Abduction
GA - Project One

Big Thank You to:
Amanda
Janine - thank you for the moral support :)
Kevin 
Jessica
And all the instructors



What I'd like to Improve On:

- More exciting Win

- Audio & Sound Effects

- More animations

- Hard level:
    Timer
    Longer words



Project Name: Alien Abduction

Project Description: Alternative to hangman. The player/s will be presented with a screen that shows a cow and how many letters the word to be guessed has. Two players will take turn guessing letters. A letter guessed correctly will display in the correct space of the word, a letter guessed incorrectly will display one part of an alien space ship above the cow. Each letter guessed incorrectly will add a piece to the space ship. 8 letters guessed incorrectly will build the entire space ship that will abduct the cow and the players will lose.

Wireframe: Images/wireframe.png

User Stories:
As a player, I want the computer to keep track of the letters I have guessed, and display them differently on screen than the ones that were guessed
As a player, I want the letters chosen correctly to display in the write location of the unknown word
As a player, I want the letters guessed incorrectly to add a piece to the space ship
As a player I want to be able to play again
As a player I want the game to be aesthetically pleasing and engaging
As a player, I want instructions on how to play the game

MVP Goals:
Game will respond to user input (either clicking "letter buttons" in game or typing a letter from keyboard)
Game will return win if player guesses word in under 8 tries
Game will return lose if player guesses word in 8 tries and space ship is built
Game will display instructions

Stretch Goals:
Easy, medium, hard levels (longer words and/or time-limit)
One player and two player options

HTML: text content
JAVASCRPT: dynamic content
CSS: styling



Notes for using MODALS

HTML Modal

 
        <!-- Trigger/Open The Modal
        <button id="myBtn">Open Modal</button>

        <!-- The Modal -->
        <div id="myModal" class="modal">

        <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div> -->


CSS Modal

/* The Modal (background) */

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }


JS Modal

// // Get the modal
// let modal = document.getElementById("myModal");

// // Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }