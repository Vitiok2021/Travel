const images = document.querySelectorAll('.slider .slider-line img');
console.log(images);
const sliderLine = document.querySelector('.slider-line');
let count = 1;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.dote_left').addEventListener('click', function () {
    count = 0;
    rollSlider();
    this.classList.toggle('dote-active');
})
document.querySelector('.dote_right').addEventListener('click', function () {
    count = 2;
    rollSlider();
})
document.querySelector('.dote_centr').addEventListener('click', function () {
    count = 1;

    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
// ------------------------------------------------------------------------
let dotes = document.querySelector('.dotes');
let dote = document.querySelectorAll('.dote');

function changeClass(event) {
    for (let i = 0; i < dote.length; i++) {
        dote[i].classList.remove('dote-active');
    }
    if (event.target.dataset.dote === 'left') {
        document.querySelector('.dote_left').classList.add('dote-active');
    }
    if (event.target.dataset.dote === 'centr') {
        document.querySelector('.dote_centr').classList.add('dote-active');
    }
    if (event.target.dataset.dote === 'right') {
        document.querySelector('.dote_right').classList.add('dote-active');
    }
}

dotes.addEventListener('click', changeClass);



// document.querySelector('.header__burger').onclick = function (event) {
//     document.querySelector('.header__burger').classList.toggle('active');
//     document.querySelector('.header__nav').classList.toggle('active');
// }


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/IPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

//Прокрутка при кліку

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',  //плавна прокрутка
            });
            // e.perventDefault();
        }
    }
}

//Burger Menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
