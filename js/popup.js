const openPopupBtns = document.querySelectorAll(".hero__btn-link");
const popups = document.querySelectorAll(".popup");
const closePopups = document.querySelectorAll(".popup__close");
const body = document.querySelector("body");

openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const popupId = btn.getAttribute("data-popup");
    const popup = document.getElementById(popupId);

    // Закрываем все попапы перед открытием нового
    popups.forEach((p) => {
      p.classList.remove("open");
    });

    popup.classList.add("open");
    body.style.overflowY = "hidden";
  });
});

closePopups.forEach((closePopup) => {
  closePopup.addEventListener("click", function () {
    popups.forEach((popup) => {
      popup.classList.remove("open");
    });
    body.style.overflowY = "auto";
  });
});

document.addEventListener("click", function (event) {
  if (
    event.target.closest(".popup__body") &&
    !event.target.closest(".popup__content")
  ) {
    popups.forEach((popup) => {
      popup.classList.remove("open");
    });
    body.style.overflowY = "auto";
  }
});
