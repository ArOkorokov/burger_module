


function burger() {
    let a = document.querySelector('.burger')
    let b = document.querySelector('.header__menu')

    a.addEventListener('click', () => {
        a.classList.toggle('burger-open')
        b.classList.toggle('menu-open')
    })
}
burger();