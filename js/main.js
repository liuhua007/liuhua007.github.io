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
  console.log(getType(installPromptEvent))

  showAddToHomeScreen();
});

function showAddToHomeScreen() {
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

function getType(obj){
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  return type;
}

