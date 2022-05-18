// ================= Change Theme ================
const theme_btn = document.getElementById("theme-btn");

theme_btn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark-theme");

  theme_btn.classList.toggle("ri-moon-line"); // moon icon
  theme_btn.classList.toggle("ri-sun-line"); // sun icon
});