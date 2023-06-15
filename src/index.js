import './styles/scss.scss';
import { Pagination } from "swiper";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./styles/mySlyder.scss";
import "./swiper2"
import "./swiper3"

let swiper1 = Swiper;
let init = false;
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      const swiper1 = new Swiper(".swiper1", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination1',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar1'
        },
      });
    } else {
      swiper1.destroy();
      init = false;
    }
  }}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});

const expand = document.getElementsByClassName('expand-brand')
const img = document.getElementsByClassName('expand__img')
const flex = document.getElementsByClassName('main')

let hidden = false
function roll() {
  hidden = !hidden
  if (hidden) {
    flex[0].style.height = 'auto'
    img[0].classList.add('rotate')
    document.getElementsByClassName('expand__txt')[0]
      .innerHTML = 'Скрыть'
  } else {
    flex[0].style.height = '160px'
    img[0].classList.remove('rotate')
    document.getElementsByClassName('expand__txt')[0]
      .innerHTML = 'Показать все'
  }
}
expand[0].addEventListener('click', roll)

let hiddenDev = false
function rollDev() {
  hiddenDev = !hiddenDev
  if (hiddenDev) {
    flex[1].style.height = 'auto'
    img[1].classList.add('rotate')
    document.getElementsByClassName('expand__txt')[1]
      .innerHTML = 'Скрыть'
  } else {
    flex[1].style.height = '160px'
    img[1].classList.remove('rotate')
    document.getElementsByClassName('expand__txt')[1]
      .innerHTML = 'Показать все'
  }
}
expand[1].addEventListener('click', rollDev)