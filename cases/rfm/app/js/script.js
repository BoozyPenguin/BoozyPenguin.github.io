$('.close-modal').click(function() {
   $(this).parent().parent().fadeOut(); 
});
$('.bxslider').bxSlider({
    mode: 'fade',
    slideSelector: 'div.slide',
    controls: false,
    pagerCustom: '#bx-pager'
});