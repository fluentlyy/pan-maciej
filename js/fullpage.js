new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  scrollOverflow: false,
});
document.addEventListener("DOMContentLoaded", function () {
  fullpage_api.setAllowScrolling(false); // Вимикаємо скролінг

  setTimeout(() => {
    fullpage_api.setAllowScrolling(true); // Увімкнути через 3 секунди
  }, 3400);
});
