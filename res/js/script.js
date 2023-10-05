document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById("login-button");
    var errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function (event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Insert both Email and password";
            event.preventDefault(); // Prevent the form from submitting
        } else {
            errorMessage.textContent = ""; // Clear any previous error message
            // Redirect to index.html (you may need to adjust the path)
            window.location.href = "index.html";
        }
    });
});
