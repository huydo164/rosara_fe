

var slideIndex;
function slideShow() {
    var i;
    var slide = document.getElementsByClassName("slide-show");
    var dot = document.getElementsByClassName("dot");
    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++){
        dot[i].classList = dot[i].className.replace(" active", "");
    }
    slide[slideIndex].style.display = "block";
    dot[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex > slide.length - 1){
        slideIndex = 0;
    }
    setTimeout(slideShow, 5000);
}
slideShow(slideIndex = 0);

function currentSlide(n){
    slideShow(slideIndex = n)
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var menu = document.querySelectorAll('header#wrapp-header');
        var menu = menu[0];
        var chieucao = pageYOffset;
        if (chieucao  > 100){
            menu.classList.add("bg-menu")
        }
        else{
            menu.classList.remove('bg-menu');
        }
    })
})