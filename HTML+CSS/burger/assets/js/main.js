let myBurger = document.querySelector('.my-burger');

myBurger.addEventListener('click', function () {
    myBurger.classList.toggle('close');
    document.body.classList.toggle('menu-open');
})

let menulink = document.querySelectorAll('.menu ul li a');
for (let i = 0; i < menulink.length; i++) {

    menulink[i].addEventListener('click', function () {
        myBurger.classList.remove('close');
        document.body.classList.remove('menu-open');
    })

    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('close');
        document.body.classList.toggle('is-active');
    })



}