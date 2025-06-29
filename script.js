 const form = document.getElementById("loginForm");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const errorMsg = document.getElementById("errorMsg");

      // Always accepted credentials
      const savedEmail = "user@gmail.com";
      const savedPassword = "123456";

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value;

        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
          window.location.href = "homepage.html";
        } else {
          errorMsg.textContent = "Invalid email or password.";
        }
      });