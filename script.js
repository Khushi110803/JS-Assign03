// Event listener for the 'Order Now' button
document.querySelector('.order_btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get values from form inputs
  const name = document.querySelector('input[placeholder="Enter your name"]').value;
  const email = document.querySelector('input[placeholder="Enter your E-mail"]').value;
  const number = document.querySelector('input[placeholder="Enter your Number"]').value;
  const totalAmount = document.querySelector('input[placeholder="Amount"]').value;
  const foodName = document.querySelector('input[placeholder="Food name"]').value;
  const address = document.querySelector('input[placeholder="Enter your address"]').value;

  // Validate the form
  if (validateForm(name, email, number, totalAmount, foodName, address)) {
      // Create a Pizza object using the Pizza class
      const pizza = new Pizza(name, email, number, totalAmount, foodName, address);

      // Display the pizza description on the HTML page
      document.querySelector('.order_main').innerHTML = `
        <h2>Thank you for your order, ${name}!</h2>
        <p>Your pizza details:</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Number:</b> ${number}</p>
        <p><b>Total Amount:</b> $${totalAmount}</p>
        <p><b>Food Name:</b> ${foodName}</p>
        <p><b>Address:</b> ${address}</p>
      `;
  }
});

// Validate the form fields
function validateForm(name, email, number, totalAmount, foodName, address) {
  // Check if any of the required fields are empty
  if (!name || !email || !number || !totalAmount || !foodName || !address) {
      alert('Please fill out all the required fields.');
      return false;
  }

  // Check if the email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  // Check if the phone number format is valid
  const numberRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
  if (!numberRegex.test(number)) {
      alert('Please enter a valid phone number (10 digits only).');
      return false;
  }

  // Additional validation logic can be added here

  // If all validations pass, return true
  return true;
}

// Pizza class definition
class Pizza {
  constructor(name, email, number, totalAmount, foodName, address) {
      this.name = name;
      this.email = email;
      this.number = number;
      this.totalAmount = totalAmount;
      this.foodName = foodName;
      this.address = address;
  }
}
