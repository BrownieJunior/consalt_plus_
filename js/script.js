//tabs

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}
//swiper
let swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: "400",
  },
});

// Form
document.querySelectorAll("#form_id").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("form.php", {
      method: "POST",
      body: new FormData(form),
    }).then((response) => {
      if (response.ok) {
        form.reset();

        const popup = document.getElementById("popup2");
        if (popup) {
          // Закрываем все попапы перед открытием нового
          popups.forEach((p) => {
            p.classList.remove("open");
          });

          popup.classList.add("open");
          body.style.overflowY = "hidden";
        }
      } else {
        alert("Произошла ошибка при отправке формы.");
      }
    });
  });
});

// burger menu
const burgerBtn = document.querySelector(".burger__btn");
const closeBurgerBtn = document.querySelector(".close__menu");
const burgerMenu = document.querySelector(".menu__burger-container");

burgerBtn.addEventListener("click", function () {
  burgerMenu.classList.add("show__menu");
});
closeBurgerBtn.addEventListener("click", function () {
  burgerMenu.classList.remove("show__menu");
});

const navItems = document.querySelectorAll('[data-link="burger__item-link"]');
const headerItems = document.querySelectorAll(
  '[data-link="header__item-link"]'
);

navItems.forEach((item) => {
  item.addEventListener("click", (event) => scrollNav(event, item)); // Обработчик события нужно передать как аргумент функции
});

headerItems.forEach((item) => {
  item.addEventListener("click", (event) => scrollNav(event, item)); // Обработчик события нужно передать как аргумент функции
});

function scrollNav(event, item) {
  // Принимаем параметр item
  event.preventDefault();

  const targetId = item.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offsetTop =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    burgerMenu.classList.remove("show__menu");
  }
}
