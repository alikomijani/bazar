// Burger menu
const toggler = document.querySelector("#BurgerMenu_toggler");

toggler.addEventListener("click", function () {
  let menu = document.querySelector(".BurgerMenu");
  menu.classList.toggle("BurgerMenu--hidden");
  let icon = toggler.querySelector(".fas");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// expendable
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(function (elem) {
  const collapsible_toggler = elem.querySelector(".collapsible__expand");
  collapsible_toggler.addEventListener("click", function (e) {
    this.parentElement.classList.toggle("collapsible--expanded");
  });
});
