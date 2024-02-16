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
function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);
    // set randomly generated alphabet to the screen(show it
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set backgroundColor
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}