const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  password.type =
    password.type === "password" ? "text" : "password";
});
