document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check credentials
    if (username === "benz" && password === "benz") {
      document.getElementById("loginMessage").innerText = "Login successful!";
      // Redirect to a new page or perform any action after successful login
      // For example, window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password. Please try again.";
    }
  });
  