function slideShow(n) {
    var slide = document.getElementsByClassName('slide-show');
    var dot = document.getElementsByClassName("dot");
    for (var i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for (var i = 0; i < dot.length; i++){
        dot[i].classList = dot[i].className.replace(" active", "");
    }
    slide[n].style.display = "block";
    dot[n].className += " active";
}

slideShow(0);
var numberSlide = 0;
function next(){

    numberSlide++
    if (numberSlide > 1){
        numberSlide = 0;
    }
    slideShow(numberSlide)
}
function prev(){
    numberSlide--;
    if (numberSlide < 0){
        numberSlide = 1;
    }
    slideShow(numberSlide)
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var menu = document.querySelectorAll('header#wrap-header');
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


function validateForm() {
    var amount = document.getElementById('amount').value;
    if (amount == '' ){
        alert('bạn chưa nhập số lượng');
        return false
    }
    if (isNaN(amount)){
        alert('dữ liệu nhập vào phải là số');
        return false;
    }
    else{
        alert('Dữ liệu thêm thành công');
        return true;
    }
}

function zoomWindow() {
    var height = document.documentElement.clientHeight;
    var h = document.getElementById("wrap-banner").offsetHeight;
    var c = document.getElementById("wrap-content").offsetHeight;
    var f = document.getElementById("wrap-footer").offsetHeight;

    var b = document.getElementById('wrap-footer');

    var totalHeight = h + c + f;
    if (height > totalHeight){
        b.classList.add('bottom');
    }
    else{
        b.classList.remove('bottom');
    }
}
zoomWindow();
window.onresize = function () {
    zoomWindow();
}