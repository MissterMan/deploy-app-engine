const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navbarList = document.querySelector(".navbar__list-mobile");
  navbarList.classList.toggle("block");
});
