let signlink = document.getElementsByClassName("signlink")[0];
let loglink = document.getElementsByClassName("loglink")[0];
let signup = document.getElementsByClassName("signup")[0];
let login = document.getElementById("login");
let signform = document.getElementById("signform");
let loginform = document.getElementById("loginform");
let coverimg = document.getElementById("coverimg");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let signemail = document.getElementById("signemail");
let signpassword = document.getElementById("signpwd");
let signbtn = document.getElementById("signbtn");
let logemail = document.getElementById("logemail");
let logpassword = document.getElementById("logpwd");
let logbtn = document.getElementById("logbtn");
let userName = document.getElementById("userName");
let logOutBtn = document.getElementById("logOutBtn");

let users;
if (localStorage.getItem("userList") != null) {
  users = JSON.parse(localStorage.getItem("userList"));
} else {
  users = [];
}

signlink.onclick = function (e) {
  e.preventDefault();
  logbtn.style.paddingTop = "115px";
  signup.classList.remove("background");
  signform.style.opacity = "100";
  signform.style.visibility = "visible";
  login.classList.add("background");
  loginform.style.visibility = "hidden";
};
loglink.onclick = function (e) {
  e.preventDefault();
  logbtn.style.paddingTop = "5px";
  login.classList.remove("background");
  loginform.style.opacity = "100";
  loginform.style.visibility = "visible";
  signup.classList.add("background");
  signform.style.visibility = "hidden";
  signform.style.transition = "0s";
};

function addUser() {
  let user = {
    name: firstName.value + " " + lastName.value,
    email: signemail.value,
    password: signpassword.value,
  };
  users.push(user);
  window.localStorage.setItem("userList", JSON.stringify(users));
}

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

signbtn.onclick = function (e) {
  e.preventDefault();

  if (firstName.value == "") {
    alert("please enter your first name");
  }
  if (lastName.value == "") {
    alert("please enter your last name");
  }

  if (!emailRegex.test(signemail.value)) {
    alert("Invalid email address. Please check your email.");
    return;
  }

  if (users.find((user) => user.email === signemail.value)) {
    alert("This email is already registered. Please use a different email.");
    return;
  }

  if (!passRegex.test(signpassword.value)) {
    alert(
      "Invalid password. Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
    );
    return;
  }

  addUser();

  alert("Sign-up successful!");

  window.location.reload();
};
let foundUser = null,
  currentUser;

logbtn.onclick = function (e) {
  e.preventDefault();
  foundUser = users.find(
    (user) =>
      user.email === logemail.value && user.password === logpassword.value
  );
  localStorage.setItem("currentUser", JSON.stringify(foundUser));

  if (foundUser) {
    alert("Login successful!");
    window.location.reload();
  } else {
    alert("Invalid email or password.");
  }
};

if (JSON.parse(localStorage.getItem("currentUser"))) {
  openPopupButton1.style.display = "none";
  openPopupButton2.style.display = "none";
  userName.innerHTML = "Welcome" + JSON.parse(localStorage.getItem("currentUser")).name + " !";
  logOutBtn.style.display = "block";
} else {
  userName.innerHTML = "";
  openPopupButton1.style.display = "block";
  openPopupButton2.style.display = "block";
}

logOutBtn.onclick = function () {
  userName.innerHTML = "";
  openPopupButton1.style.display = "block";
  openPopupButton2.style.display = "block";
  logOutBtn.style.display = "none";
  localStorage.setItem("currentUser", null);
};
