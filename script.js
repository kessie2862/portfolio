const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");
const overlay = document.querySelector(".overlay");

// open nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  overlay.classList.remove("hidden");

  // Prevent scrolling when overlay is active
  document.body.style.overflow = "hidden";
});

// close nav menu function
const closeNavMenu = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  overlay.classList.add("hidden");

  // Enable scrolling when overlay is inactive
  document.body.style.overflow = "scroll";
};

closeBtn.addEventListener("click", () => {
  closeNavMenu();
});

// close nav menu when any nav Items is clicked on tablets and mobile
const navItems = document.querySelectorAll("nav__items li a");
if (window.innerWidth < 767) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeNavMenu();
    });
  });

  // hide nav items when clicked
  menu.addEventListener("click", () => {
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
    overlay.classList.add("hidden");
    menuBtn.style.display = "block";
  });
}
