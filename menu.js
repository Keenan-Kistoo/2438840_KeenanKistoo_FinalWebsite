//Show/Close menu functions for homepage
document.addEventListener("DOMContentLoaded", () => {
  let burgerBtn = document.querySelector(".burger-btn");
  let options = document.querySelector(".options");
  let quit = document.querySelector(".x-btn");

  burgerBtn.addEventListener("click", () => {
    console.log("is working");
    options.className = "options-tab show-menu";
  });

  quit.addEventListener("click", () => {
    options.className = "options-tab";
  });
});
