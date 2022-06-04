const navBar = document.getElementsByClassName("nav")[0];
console.log(navBar);

const iconToggle = document.getElementsByClassName("icn__toggle")[0];
console.log(iconToggle);

iconToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
