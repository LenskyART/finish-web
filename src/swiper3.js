import Swiper from "swiper/bundle";
import { Pagination } from "swiper";
import "swiper/css/bundle";


let swiper3 = Swiper;
let init = false;
export function swiperMode3() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      const swiper3 = new Swiper(".swiper3", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination3',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar3'
        },
      });
    } else {
      swiper3.destroy();
      init = false;
    }
  }}

window.addEventListener("load", function () {
  swiperMode3();
});

window.addEventListener("resize", function () {
  swiperMode3();
});