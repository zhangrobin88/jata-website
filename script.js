// When enter is pressed in password field we will check if the password i correct.
// If correct we will be directed to the Hidden page.
// This codesnippet will load lastly.
const correctPassword = "jataForever";
let loggedIn = false;


document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("ip2");
    
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter" && window.location.pathname !== "/hiddenPage.html") {
        if (input.value === correctPassword) {
            loggedIn = true;
            if (loggedIn) {
                window.location.href = "hiddenPage.html";
                document.getElementById("hiddenPage").display = "none";
                console.log("Logged in");
            }
            
        } else {
            loggedIn = false;
            console.log("Enter pressed passwrod incorrect!")
            console.log(input.value);
            input.value = "";
            document.getElementById("hiddenPage").display = "none";
            console.log("Not logged in");
        }
      }
    });
  });

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


function overlayLoginPromptOn() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").style.justifyContent="center";
    document.getElementById("overlay").style.flexDirection = "column";
  }
  
  function overlayLoginPromptOff() {
    document.getElementById("overlay").style.display = "none";
  }





// Function that makes div containers disappear
//function toggleOpacity(container) {
//    if (container.style.opacity === "") {
//      container.style.opacity = "1";
//   } else {
//      var currentOpacity = parseFloat(container.style.opacity);
//      container.style.opacity = (currentOpacity === 1) ? "0" : "1";
//    }
//  }
