let c1 = document.querySelector(".circle1");
let c2 = document.querySelector(".circle2");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  c1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`;
  c2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`;
});
