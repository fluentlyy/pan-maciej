let porsche = document.querySelector(".porsche__small");

setTimeout(() => {
  porsche.style.display = "none";
}, 3000);

document.body.style.overflow = "hidden";

setTimeout(() => {
  document.body.style.overflow = "auto";
}, 4700);
