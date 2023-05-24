function validarFormulario() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  if (password === "") {
    alert("Please enter a password");
    return false;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
