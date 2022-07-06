const burger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');
const closeBurgerBtn = document.querySelector('.nav__btn-close');

burger.addEventListener('click', function() {
  navList.classList.toggle('show');
});

closeBurgerBtn.addEventListener('click', function() {
  navList.classList.toggle('show');
});

const searchBtn = document.querySelector('.header__search-btn');
const searchField = document.querySelector('.block');
const closeSearchField = document.querySelector('.block__close-btn');

searchBtn.addEventListener('click', function() {
  searchField.classList.toggle('open');
});

closeSearchField.addEventListener('click', function() {
  searchField.classList.toggle('open');
});


const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


$(".accordion").accordion({
  active: false,
  collapsible: true,
  header: ".faq__item-descr",
  heightStyle: "content",
  icons: {
    "header": "faq__item__accord",
    "activeHeader": "faq__item__accord faq__item__accord-active"},
});
