const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{11}$/;

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const restaurant = document.getElementById("resturants").value;
  const date = document.getElementById("date").value.trim();
  const time = document.getElementById("time").value.trim();
  const people = document.getElementById("people").value;
  const comments = document.getElementById("comments").value;
  const newsletter = document.getElementById("newsletter").checked;

  // Validation
  if (firstName === "") {
    alert("Please enter your first name.");
    return;
  }
  if (lastName === "") {
    alert("Please enter your last name.");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email address. Please check your email.");
    return;
  }
  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number. Please enter a valid 11-digit number.");
    return;
  }

  // Store data in local storage
  localStorage.setItem("bookingData", JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    restaurant,
    date,
    time,
    people,
    comments,
    newsletter
  }));

  // Redirect to the next page
  window.location.href = "tablereservation.html";
});


