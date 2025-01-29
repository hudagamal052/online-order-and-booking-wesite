document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let isValid = true;
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!firstName || !nameRegex.test(firstName)) {
      alert('Please enter a valid first name (letters and spaces only).');
      isValid = false;
    }
    if (!lastName || !nameRegex.test(lastName)) {
      alert('Please enter a valid last name (letters and spaces only).');
      isValid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
  
    const egyptPhoneRegex = /^(010|011|012|015)\d{8}$/;
    if (!phone || !egyptPhoneRegex.test(phone)) {
      alert('Please enter a valid Egyptian phone number (11 digits starting with 010, 011, 012, or 015).');
      isValid = false;
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });


          document.getElementById('bookingForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Booking submitted successfully!');
    });