window.addEventListener('load', function () {
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  if (bookingData) {
    // Set the user's name
    const userName = `${bookingData.firstName} ${bookingData.lastName}`;
    document.getElementById('username').innerText = `Hello, ${userName}!`;

    // Set the restaurant, date, and time
    document.getElementById('restaurantName').innerText = bookingData.restaurant;
    document.getElementById('reservationDateTime').innerText = `${bookingData.date} at ${bookingData.time}`;

    // Set the number of guests
    document.getElementById('guestCount').innerText = `${bookingData.people} Guests`;

    // You can also use the comments and newsletter data if needed
    console.log(bookingData.comments); // Optional, display comments
    console.log(bookingData.newsletter ? "Subscribed to newsletter" : "Not subscribed to newsletter");
  } else {
    console.log("No booking data found.");
  }
});
