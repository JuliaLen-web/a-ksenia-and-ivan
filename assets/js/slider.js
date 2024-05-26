
const swiper = new Swiper('.swiper--female', {
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        769: {slidesPerView: 3}
    },
    navigation: {
      nextEl: '.female.swiper-button-next',
      prevEl: '.female.swiper-button-prev',
    },
  }
);

const swiperSecond = new Swiper('.swiper--male', {
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        769: {slidesPerView: 3}
    },
    navigation: {
      nextEl: '.male.swiper-button-next',
      prevEl: '.male.swiper-button-prev',
    },
  });