// function play(){
// //    hide the home screen.to hide the screen add the class hidden to the home screen
// const homeScreen = document.getElementById('home-screen');
// homeScreen.classList.add('hidden');
// // console.log(homeScreen);

// // show the playground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// // console.log(playGroundSection.classList);
//  }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
   console.log('player pressde', playerPressed)
//    stope the game if presses "Esc"
if(playerPressed === "Escape"){
    gameOver();
}
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
   
   
    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score',updateScore);

        // ..............................................
        // update score:
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // console.log(currentScore);

        // // 2.increase the score by 1
        const newScore = currentScore + 1;
        // // show the update score
        // currentScoreElement.innerText = newScore;
        // start a new score
       

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{

        console.log('you missed.you lost a life')
        const currentLife = getTextElementValueById('current-life');
       const updateLife = currentLife - 1;
       setTextElementValueById('current-life',updateLife);
        if(updateLife === 0){
           gameOver();
        }

        // ..............................................
        // step-1:get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText);
        // // step-2:reduce the life count
        // const newLife = currentLife - 1;
        // // step-3 display the update life count
        // currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    // set randomly generated alphabet to the screen(show it
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set backgroundColor
    setBackgroundColorById(alphabet);

}

function play(){
    // hide everything show only playGround
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
//    reset score and life
setTextElementValueById('current-life', 5);
setTextElementValueById('current-score', 0);
    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // step-1 get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);
    // clear the last  selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
