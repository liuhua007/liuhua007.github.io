window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

var installPromptEvent;

window.addEventListener('beforeinstallprompt', function (e) {
  console.log("received beforeinstallprompt....");
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  installPromptEvent = e;

  showAddToHomeScreen();
});

function showAddToHomeScreen() {
  //var a2hsBtn = document.querySelector(".ad2hs-prompt");
  //a2hsBtn.style.display = "block";
  //a2hsBtn.addEventListener("click", addToHomeScreen);
  console.log("show add to home screen");
}

document.querySelector('#btn-install').addEventListener('click', () => {
  if( !installPromptEvent ) {
    return;
  }

  installPromptEvent.prompt();
  installPromptEvent.userChoice.then( choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('accepted to add to desktop')
    } else {
      console.log('cancel adding to desktop')
    }
  })
})

window.addEventListener('appinstalled', (evt) => {
  console.log('has already installed this app');
});