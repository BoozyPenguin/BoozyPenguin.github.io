function showCases() {
    $('section.cases > div').hide();
    $('section.cases > div.all').show();
};
function listsEvent() {
    $('nav.categories li').click(function() {
        var itemCategory = $(this).data('category');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('section.cases > div').hide();
        $('section.cases > div.' + itemCategory).fadeIn(600);
    });
};
showCases();
listsEvent();
$('.case > .fas').click(function() {
    var href;
    if($(this).siblings('.heading').children('.paragraph').children('a').attr('data-slide'))
        href = $(this).siblings('.heading').children('.paragraph').children('a.current-slide').attr('href')
    else
        href = $(this).siblings('.heading').children('.paragraph').children('a').attr('href')
    document.location = href;
});
function sliderImages() {
    $('.slider .next-arrow').click(function() {
        var slidesCount = $(this).parent().parent().siblings('img[data-slide]').length,
            currentSlide = $(this).parent().parent().siblings('img[data-slide].current-slide'),
            currentHeading = $(this).parent().siblings('div.paragraph').children('a[data-slide].current-slide'),
            currentIndex = currentSlide.data('slide'),
            nextSlide, nextHeading;
        if(currentIndex++ == slidesCount) {
            nextSlide = $(this).parent().parent().siblings('img[data-slide="1"]');
            nextHeading = $(this).parent().siblings('div.paragraph').children('a[data-slide="1"]');
        } else {
            nextSlide = currentSlide.next('img[data-slide]');
            nextHeading = currentHeading.next('a[data-slide]');
        }
        currentSlide.hide().removeClass('current-slide');
        currentHeading.hide().removeClass('current-slide');
        nextSlide.show().addClass('current-slide');
        nextHeading.show().addClass('current-slide');
    });
};
sliderImages();