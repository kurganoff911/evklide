const container = document.querySelector(".container");
const swiper = new Swiper(".swiper", {
  // Default parameters

  speed: 300,
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    clickable: true,
  },
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let menuLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__menu--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__menu--active");

    document.body.classList.remove("stop-scroll");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__button").forEach(function (e) {
    e.addEventListener("click", function () {
      e.classList.add("header__button--color"),
        document
          .querySelectorAll(".header__wrapper-search")
          .forEach(function (e) {
            e.classList.add("search-active");
          });
    });
  }),
    document.querySelectorAll(".search-close").forEach(function (e) {
      e.addEventListener("click", function () {
        document
          .querySelectorAll(".header__wrapper-search ")
          .forEach(function (e) {
            e.classList.remove("search-active");
          }),
          document.querySelectorAll(".header__button").forEach(function (e) {
            e.classList.remove("header__button--color");
          });
        document.querySelector("input").value = "";
      });
    });
});

new Accordion(".accordion-container", {
  triggerClass: 'list__item',
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
