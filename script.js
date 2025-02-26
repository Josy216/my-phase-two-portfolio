const btn = document.querySelector("#more");
const morePro = document.querySelector(".more-pro");

btn.addEventListener("click", function () {
  if (morePro.style.display === "flex") {
    morePro.style.display = "none";
    btn.textContent = "Show More"; // Change text back to "Show More"
  } else {
    morePro.style.display = "flex";
    btn.textContent = "Show Less"; // Change text to "Show Less"
  }
});