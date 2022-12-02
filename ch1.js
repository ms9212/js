const h1 = document.querySelector("div#app:first-child h1");

function changeTC(color, text) {
  h1.style.color = color;
  h1.innerText = text;
}

const superEventHandler = {
  handleMouseOver: function () {
    changeTC("#339900", "The mouse is here!");
  },
  handleMouseLeave: function () {
    changeTC("#3366FF", "The mouse is gone!");
  },
  handleWindowResize: function () {
    changeTC("#990066", "You just resized!");
  },
  handleMouseConTextMenu: function () {
    changeTC("#FF3300", "That was a right click!");
  },
};

h1.addEventListener("mouseenter", superEventHandler.handleMouseOver);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleMouseConTextMenu
);
