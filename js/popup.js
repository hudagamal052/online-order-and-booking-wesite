// Get the pop-up and button elements
const popup = document.getElementById("popup");
const openPopupButton1 = document.getElementById("openPopup1");
const openPopupButton2 = document.getElementById("openPopup2");
const closePopupButton = document.getElementById("closePopup");
const closePopupButton2 = document.querySelector("#closePopup2");
const closePopupButton3 = document.querySelector("#closePopup2");
const formVisibleElement = document.querySelector(".formVisible");
// Function to open the popup
function openPopup() {
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Open the pop-up when the first button is clicked
openPopupButton1.addEventListener("click", () => {
  openPopup();
  (function () {
    logbtn.style.paddingTop = "115px";
    signup.classList.remove("background");
    signform.style.opacity = "100";
    signform.style.visibility = "visible";
    login.classList.add("background");
    loginform.style.visibility = "hidden";
  })();
});

// Open the pop-up when the second button is clicked
openPopupButton2.addEventListener("click", () => {
  openPopup();
  (function () {
    logbtn.style.paddingTop = "5px";
    login.classList.remove("background");
    loginform.style.opacity = "100";
    loginform.style.visibility = "visible";
    signup.classList.add("background");
    signform.style.visibility = "hidden";
    signform.style.transition = "0s";
  })();
});

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener("click", () => {
  closePopup();
});
closePopupButton2.addEventListener("click", () => {
  closePopup();
});
popup.addEventListener("click", (event) => {
  if (!formVisibleElement.contains(event.target)) {
    closePopup();
  }
});

let navLog = document.getElementsByClassName("nav-log")[0];

navLog.onclick = function (e) {
  e.preventDefault();
};

let navSign = document.getElementsByClassName("nav-sign")[0];

navSign.onclick = function (e) {
  e.preventDefault();
};
