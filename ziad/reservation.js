let hiUser = document.getElementById("hiUser");

hiUser.innerHTML = `Hi, ${
  JSON.parse(localStorage.getItem("currentUser")).name
}`;
