window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

var installPromptEvent;

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('[JS] display-mode is standalone');
} else {
  console.log('[JS] display-mode is not standalone');
}

window.addEventListener('appinstalled', function() {
  console.log('[JS] Received appinstalled event!!');
});

window.addEventListener('beforeinstallprompt', function (e) {
  console.log("[JS] Received beforeinstallprompt event!!");

  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  installPromptEvent = e;
  
  //console.log(getType(installPromptEvent))

  showAddToHomeScreen();
});

function showAddToHomeScreen() {
  // console.log("show add to home screen");
}

document.querySelector('#btn-install').addEventListener('click', () => {
  if( !installPromptEvent ) {
    return;
  }

  installPromptEvent.prompt();
  installPromptEvent.userChoice.then( choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('[JS] accepted the installation')
    } else {
      console.log('[JS] canceled the installation')
    }
  })
})

function getType(obj){
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  return type;
}

