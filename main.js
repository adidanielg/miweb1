document.querySelector('.menu-btn').addEventListener('click', () =>
{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer-links', { delay: 500 });
ScrollReveal().reveal('.carrousel', { delay: 500 });

// Scroll up 
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll/5));
    }
}

buttonUp = document.getElementById("button-up")
window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    if ( scroll > 1000) {
        buttonUp.style.transform = "scale(1)";
    }
    else if (scroll < 1000) {
        buttonUp.style.transform = "scale(0)";
    }
}




