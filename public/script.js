
  function smoothScroll(){
    document.querySelector('.tourDatesParentContainer').scrollIntoView({
        behavior: 'smooth'
    });
}

// SHOP BUTTON HOVER EFFECT dessa kan vi skriva om så att vi slipper alla funktioner!
function oldShopBtn() {
    document.getElementById("shopBtn").src="assets/landingPage/BUTTONS/DEFAULT/SHOP__BUTTON.png";
}
function newShopBtn() {
    document.getElementById("shopBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/SHOP__BUTTON-1.png";
}

// LISTEN BUTTON HOVER EFFECT
function oldListenBtn() {
    document.getElementById("listenBtn").src="assets/landingPage/BUTTONS/DEFAULT/LISTEN_BUTTON.png";
}
function newListenBtn() {
    document.getElementById("listenBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/LISTEN_BUTTON-1.png";
}

// LISTEN BUTTON HOVER EFFECT
function oldWatchBtn() {
    document.getElementById("watchBtn").src="assets/landingPage/BUTTONS/DEFAULT/WATCH_BUTTON.png";
}
function newWatchBtn() {
    document.getElementById("watchBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/WATCH_BUTTON-1.png";
}

// SHOWS BUTTON HOVER EFFECT
function oldShowsBtn() {
    document.getElementById("showsBtn").src="assets/landingPage/BUTTONS/DEFAULT/SHOWS_BUTTON.png";
}
function newShowsBtn() {
    document.getElementById("showsBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/SHOWS_BUTTON-1.png";
}

// LOGIN BUTTON HOVER EFFECT
function oldLoginBtn() {
    document.getElementById("loginBtn").src="assets/landingPage/BUTTONS/DEFAULT/LOGIN_BUTTON.png";
}
function newLoginBtn() {
    document.getElementById("loginBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/LOGIN BUTTON.png";
}

function oldCloseBtn() {
    document.getElementById("closeBtn").src="assets/landingPage/BUTTONS/DEFAULT/CLOSE_BUTTON.png";
}
function newCloseBtn() {
    document.getElementById("closeBtn").src="assets/landingPage/BUTTONS/HOOVER_KLICK/CLOSE_BUTTON_HOOVER.png";
}

function oldBtn(elementId, imgSrc) {
    document.getElementById(elementId).src=imgSrc;
}

function newBtn(elementId, imgSrc) {
    document.getElementById(elementId).src=imgSrc;
}

/*
function overlayLoginPromptOn() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").style.justifyContent="center";
    document.getElementById("overlay").style.flexDirection = "column";
  }
  
  function overlayLoginPromptOff() {
    document.getElementById("overlay").style.display = "none";
  }
*/




// Function that makes div containers disappear
//function toggleOpacity(container) {
//    if (container.style.opacity === "") {
//      container.style.opacity = "1";
//   } else {
//      var currentOpacity = parseFloat(container.style.opacity);
//      container.style.opacity = (currentOpacity === 1) ? "0" : "1";
//    }
//  }
