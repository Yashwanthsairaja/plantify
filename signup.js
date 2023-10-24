const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
// Select the "Sign Up" button by its id
const signupButton = document.getElementById("signupButton");

// Add a click event listener to the button
signupButton.addEventListener("click", () => {
  // Redirect to the dashboard.html page
  window.location.href = "dashboard.html";
});
