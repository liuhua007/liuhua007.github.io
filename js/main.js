window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  console.log("received beforeinstallprompt....");
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  showAddToHomeScreen();

});

function showAddToHomeScreen() {

  //var a2hsBtn = document.querySelector(".ad2hs-prompt");

  //a2hsBtn.style.display = "block";

  //a2hsBtn.addEventListener("click", addToHomeScreen);
  console.log("show add to home screen");

}