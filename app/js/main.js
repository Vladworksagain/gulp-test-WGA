AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});


const burgAnimation = () => {
    const burger = document.querySelector('.svg__burger')
    const path1 = document.querySelector('.path1')
    const path2 = document.querySelector('.path2')
    const mline = document.querySelector('.mline')
    const menuCloseBtn = document.querySelector('.menu-close__btn')
    const menu = document.querySelector('.mobile__menu')
    const bodyScroll = document.querySelector('body')

    burger.addEventListener('click',() => {
        path1.classList.add('cross');
        path2.classList.add('cross');
        mline.classList.add('hide');
        menu.classList.add('menu__open')
        bodyScroll.classList.add('menu__active')

        menuCloseBtn.addEventListener('click', () => {
            menu.classList.remove('menu__open')
            path1.classList.remove('cross');
            path2.classList.remove('cross');
            mline.classList.remove('hide');
            bodyScroll.classList.remove('menu__active')
        })

        }
    )
}

burgAnimation();