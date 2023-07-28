//your code here
function validateForm() {
      const nameInput = document.getElementById("name");
      const portfolioInput = document.getElementById("portfolio");

      if (nameInput.value.length < 3 || nameInput.value.length > 50) {
        alert("Name must be between 3 and 50 characters.");
        return false;
      }

      // You can add further validation for the portfolio URL if required.

      return true;
    }