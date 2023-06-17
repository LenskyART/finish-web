import './styles/scss.scss';
import { Pagination } from "swiper";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
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

const expands = document.getElementsByClassName('expand-brand')
  for (let expand of expands) {
    expand.hidden = true
  }
const expandImg = document.getElementsByClassName('expand__img')
const expandFlex = document.getElementsByClassName('main')
const expandTxt = document.getElementsByClassName('expand__txt')


function roll(exp) {
  if (expands[exp].hidden) {
  expandFlex[exp].style.height = 'auto'
    expandImg[exp].classList.add('rotate')
    expandTxt[exp].innerHTML = 'Скрыть'
  } else {
    expandFlex[exp].style.height = '160px'
    expandImg[exp].classList.remove('rotate')
    expandTxt[exp].innerHTML = 'Показать все'
  }
  expands[exp].hidden = !expands[exp].hidden
}

for (let i = 0; i < expands.length; i++) {
  expands[i].addEventListener('click', roll.bind(null, i))
}


// let hiddenBrand = false
// function roll() {
//   hiddenBrand = !hiddenBrand
//   if (hiddenBrand) {
//     expandFlex[0].style.height = 'auto'
//     expandImg[0].classList.add('rotate')
//     expandTxt[0].innerHTML = 'Скрыть'
//   } else {
//     expandFlex[0].style.height = '160px'
//     expandImg[0].classList.remove('rotate')
//     expandTxt[0].innerHTML = 'Показать все'
//   }
// }
// expand[0].addEventListener('click', roll)
//
// let hiddenDevice = false
// function rollDev() {
//   hiddenDevice = !hiddenDevice
//   if (hiddenDevice) {
//     expandFlex[1].style.height = 'auto'
//     expandImg[1].classList.add('rotate')
//     expandTxt[1].innerHTML = 'Скрыть'
//
//   } else {
//     expandFlex[1].style.height = '160px'
//     expandImg[1].classList.remove('rotate')
//     expandTxt[1].innerHTML = 'Показать все'
//
//   }
// }
// expand[1].addEventListener('click', rollDev)





const openMenuBtn = document.getElementsByClassName('openMenuBtn')
const menu = document.getElementsByClassName('sidebar')[0]
const wrapper = document.getElementsByClassName('wrapper')[0]
const blur = document.getElementsByClassName('blur')[0]

let hiddenMenu = true
function openMenu() {
  if (hiddenMenu) {
    document.getElementById('body').style.overflow = 'hidden'
    menu.classList.add('sidebar_open')
    wrapper.classList.add('wrapper_trans')
    blur.classList.add('blur_on')
  } else {
    document.getElementById('body').style.overflow = 'unset'
    menu.classList.remove('sidebar_open')
    wrapper.classList.remove('wrapper_trans')
    blur.classList.remove('blur_on')
  }
  hiddenMenu =!hiddenMenu
}

for (let btn of openMenuBtn) {
  btn.addEventListener('click', openMenu)
}
