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

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}