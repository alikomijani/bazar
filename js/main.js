const toggler = document.querySelector("#BurgerMenu_toggler");
toggler.addEventListener("click", function () {
  let menu = document.querySelector(".BurgerMenu");
  menu.classList.toggle("BurgerMenu--hidden");
  let icon = toggler.querySelector(".fas");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
