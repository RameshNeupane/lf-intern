const menuBtn = document.getElementsByClassName("menu")[0];
console.log(menuBtn);

const navBar = document.getElementsByClassName("nav")[0];
console.log(navBar);

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
