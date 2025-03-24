let button = document.querySelector(".info-content__button");
let closeButton = document.querySelector(".close");
let modal = document.querySelector(".modal");
const overlay = document.createElement("div");

button.addEventListener("click", function (e) {
  e.preventDefault();

  // Відкриваємо модалку
  modal.style.display = "flex";

  // Додаємо затемнення

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "9999"; // Менший z-index, ніж у модалки
  overlay.style.pointerEvents = "all"; // Забезпечує, щоб користувач міг взаємодіяти з елементами
  document.body.appendChild(overlay);

  overlay.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.removeChild(overlay); // Видаляємо overlay
  });
});
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.removeChild(overlay);
});
