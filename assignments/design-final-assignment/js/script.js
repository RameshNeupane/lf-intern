const navBar = document.getElementsByClassName("nav")[0];

const iconToggle = document.getElementsByClassName("icn__toggle")[0];

iconToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
