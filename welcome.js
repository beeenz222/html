document.getElementById("logoutLink").addEventListener("click", function(event) {
    event.preventDefault();
    // Clear the session storage and redirect to the login page on logout
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
  