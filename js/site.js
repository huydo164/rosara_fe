
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

function imgShow(n) {
    var img = document.getElementsByClassName("item-image");
    var dot = document.getElementsByClassName("dotImg");
    var itemShow = document.getElementsByClassName("image-show")

    for (var i = 0; i < img.length; i++){
        img[i].classList = img[i].className.replace(" active", "");
    }
    for (var j = 0; j < dot.length; j++){
        dot[j].classList = dot[j].className.replace(" active", "");
    }

    dot[n].className += " active"
    img[n].className += " active";

    let data = img[n].getAttribute('data');
    if(data != ''){
        document.getElementById("showImg").src=data;
    }
}

function selectColor(n) {
    var color = document.getElementsByClassName('color');
    for (var i = 0; i < color.length; i++){
        color[i].classList = color[i].className.replace(" active", "");
    }
    color[n].className += " active";
}

function selectSize(n) {
    var size = document.getElementsByClassName('size');
    for (var i = 0; i < size.length; i++){
        size[i].classList = size[i].className.replace(" active", "");
    }
    size[n].className += " active"
}