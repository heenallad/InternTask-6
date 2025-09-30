document.getElementById("contactform").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("msg").value.trim();
  const errorDiv = document.getElementById("errorMessages");

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }
  else if (!/^[A-Za-z\s]+$/.test(name)) {
    errors.push("Name must contain only alphabets and spaces.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Form submitted successfully!");
    // Optionally reset the form
    document.getElementById("contactform").reset();
  }
});