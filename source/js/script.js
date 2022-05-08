document.querySelector('.header--no-js').classList.remove('header--no-js');

document.querySelector('.footer').classList.add('footer--iframe-map');

const menuToggler = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__navigation');

menuToggler.addEventListener('click', function() {
    menuToggler.classList.toggle('header__toggle--closed');
    menuToggler.classList.toggle('header__toggle--opened');
    navigation.classList.toggle('header__navigation--closed');
    navigation.classList.toggle('header__navigation--opened');
});
