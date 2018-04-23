plyr.setup();
$('.modal').hide();
$('.call').click(function() {
    $('.call-form').fadeIn();
});
$('.close-call-form').click(function() {
    $('.call-form').fadeOut();
});
$('.get-brief').click(function() {
    $('.brief-form').fadeIn();
});
$('.close-brief-form').click(function() {
    $('.brief-form').fadeOut();
});
$('.find-cost').click(function() {
    $('.cost-form').fadeIn();
});
$('.close-cost-form').click(function() {
    $('.cost-form').fadeOut();
});
$('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: '',
    smartSpeed: 1000
});
$('.preview-images > div').hover(function() {
    $(this).addClass('active-img');
    $(this).siblings().removeClass('active-img');
    var source = $(this).children('a').children('img').attr('src');
    $(this).parent().siblings('.finish-img').children('img').attr('src', source);
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.686358, 37.614465],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.Placemark([55.686358, 37.614465], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'https://vardseller.ru/obaexpo/point.png',
            iconImageSize: [43, 64],
            iconImageOffset: [-20, -64]
        });
        
        myMap.behaviors
            .disable('scrollZoom');
    myMap.geoObjects
        .add(myGeoObject);
});