// Function to check if user is logged in
function checkLoggedIn() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (isLoggedIn) {
      window.location.href = "welcome.html";
    }
  }
  
  checkLoggedIn(); // Check if user is already logged in on page load
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check credentials
    if (username === "benz" && password === "benz") {
      // Set logged-in status in session storage
      sessionStorage.setItem("loggedIn", true);
      // Redirect to welcome page upon successful login
      window.location.href = "welcome.html";
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password. Please try again.";
    }
  });
  