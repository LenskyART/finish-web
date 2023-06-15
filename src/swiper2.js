import Swiper from "swiper/bundle";
import { Pagination } from "swiper";
import "swiper/css/bundle";


let swiper2 = Swiper;
let init = false;
export function swiperMode2() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      const swiper2 = new Swiper(".swiper2", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar2'
        },
      });
    } else {
      swiper2.destroy();
      init = false;
    }
  }}

window.addEventListener("load", function () {
  swiperMode2();
});

window.addEventListener("resize", function () {
  swiperMode2();
});