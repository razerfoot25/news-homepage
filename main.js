const Navigation = document.querySelector(".navigation");
const NavMenu = document.querySelector(".hamburger");
const NavItems = document.querySelector(".nav-items");
NavMenu.onclick = () => {
  Navigation.classList.toggle("navigation-bg");
  NavMenu.classList.toggle("menu-close");
  NavItems.classList.toggle("nav-opened");
  document.body.classList.toggle("menu-is-open");
};
