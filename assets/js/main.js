import initAnimation from "./sarcasnimation.js";

const d = document,
  w = window;

const toggleButtonMenu = (evt, $menu) => {
  if ($menu.classList.contains("show")) {
    iconButtonMenu.classList.remove("fa-bars");
    iconButtonMenu.classList.add("fa-times");
  } else {
    iconButtonMenu.classList.add("fa-bars");
    iconButtonMenu.classList.remove("fa-times");
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const $nav = d.querySelector(".nav");

  initAnimation();

  d.addEventListener("click", (evt) => {
    // console.log(evt.target);
    if (evt.target.dataset.trigger == "buttonMenu") {
      const $menu = d.getElementById(evt.target.dataset.collapsed);
      $menu.classList.toggle("show");
      toggleButtonMenu(evt, $menu);
    }

    if (evt.target.matches(".ads__promo")) {
      d.querySelector(".adsbox").classList.add("show");
    }

    if (
      evt.target.matches("#buttonCloseModal") ||
      evt.target.matches(".adsbox") ||
      evt.target.matches(".adsbox__container")
    ) {
      d.querySelector(".adsbox").classList.remove("show");
    }
  });
  //Eventos de Scroll para el menu
  w.addEventListener("scroll", (evt) => {
    if (w.innerWidth > 580) {
      if (
        w.scrollY + $nav.offsetHeight >
        d.querySelector(".header__heading").offsetTop
      ) {
        //   console.log("dark", w.scrollY, $nav.offsetHeight);
        $nav.classList.add("dark");
      } else {
        // console.log("claro", w.scrollY, $nav.offsetHeight);
        $nav.classList.remove("dark");
      }
    }
  });
});
