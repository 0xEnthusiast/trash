const nav = document.querySelector('#nav');
const navsBtn = document.querySelector('#navs__btn');
const navBtnImg = document.querySelector('#nav__btn-img');

navsBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/NAV CLOSE.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-btn.svg";
    }
}

AOS.init();