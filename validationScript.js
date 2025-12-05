    // JavaScript code for form validation
    document.addEventListener('DOMContentLoaded', function() {

    // Retrieve form and input friend elements
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");

    // Create an element to show feedback messages
    const message = document.createElement("p");
    form.appendChild(message);

  // Add event listner for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve the input field value
      const inputValue = inputField.value.trim();

      // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (!alphanumericRegex.test(inputValue)) {

        // Valid input: display confirmation and submit the form
        message.textContent = "Error: Please enter only letters and numbers.";
        message.style.color = "red";
      } else {
        // Invalid input: display error message
        message.textContent = "Success! Form submitted (virtually).";
        message.style.color = "green";
        // Optionally, you can reset the form
        form.reset();
      }
  });
});