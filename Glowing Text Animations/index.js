let text = document.querySelector(".text");
let spans = text.innerText
  .split("")
  .map(
    (alpha, idx) =>
      `<span style="transition-delay:${idx * 20}ms;filter:hue-rotate(${
        idx * 30
      }deg)">${alpha}</span>`
  )
  .join("");
text.innerHTML = spans;
console.log(spans);
