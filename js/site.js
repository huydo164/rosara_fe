$(document).ready(function () {
    var currentImage = 1;
    var totalImage = 2;
    $('.icon-pre').on('click', function () {
        $('#im_' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
    })
    $('.icon-next').on('click', function () {
        $('#im_' + currentImage).stop().fadeOut(1);
        increaseImage();
        $('#im_' + currentImage).stop().fadeIn(1);
    })
    
    function increaseImage() {
        ++currentImage;
        if (currentImage > totalImage){
            currentImage = 1;
        }
    }
    
    function decreaseImage() {
        --currentImage;
        if (currentImage < 1){
            currentImage = totalImage;
        }
    }
})