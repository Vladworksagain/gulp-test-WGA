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