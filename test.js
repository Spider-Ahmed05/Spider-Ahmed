let goUp = document.querySelector('button');

window.onscroll = function () {
    if (window.scrollY >= 500) {
        goUp.style.display = 'block';
    }
    else {
        goUp.style.display = 'none';
    }
}

goUp.addEventListener('click', function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
})


