const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.menu')
const burgerItem = document.querySelectorAll('.burger')


burgerMenu.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        navMenu.style.transform = 'translateX(0)'
        burgerItem[0].style.transform = "rotate(-45deg) translateY(19px)"
        burgerItem[2].style.transform = 'rotate(45deg) translateY(-19px)'
        burgerItem[1].style.opacity = '0'
    } else {
        burgerMenu.classList.remove('active')
        navMenu.style.transform = ''
        burgerItem[0].style.transform = ""
        burgerItem[2].style.transform = ''
        burgerItem[1].style.opacity = ''
    }
})

