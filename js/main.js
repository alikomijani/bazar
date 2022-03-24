// Burger menu
const toggler = document.querySelector("#BurgerMenu_toggler");
toggler.addEventListener("click", function () {
  let menu = document.querySelector(".BurgerMenu");
  menu.classList.toggle("BurgerMenu--hidden");
  let icon = toggler.querySelector(".fas");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
let pos = {};
// expendable
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(function (elem) {
  const collapsible_toggler = elem.querySelector(".collapsible__expand");
  collapsible_toggler.addEventListener("click", function (e) {
    this.parentElement.classList.toggle("collapsible--expanded");
  });
});
// dragable
const app_lists = document.querySelectorAll(".app-list");
app_lists.forEach(function (app_list) {
  app_list.addEventListener("mousedown", mousedown);
});
function mousedown(e) {
  e.preventDefault();
  pos = {
    // The current scroll
    left: this.scrollLeft,
    // Get the current mouse position
    x: e.clientX,
  };
  this.onmousemove = mousemove;
  this.onmouseup = mouseup;
}
function mousemove(e) {
  e.preventDefault();
  const dx = e.clientX - pos.x;
  // Scroll the element
  this.scrollLeft = pos.left - dx;
}
function mouseup(e) {
  e.preventDefault();
  console.log(e.target);
  this.onmousemove = undefined;
  this.onmouseup = undefined;
}
