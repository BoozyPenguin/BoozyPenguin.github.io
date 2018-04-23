$('.modal').hide();
$('header nav').hide();
$('.tabs__content').fadeOut();
$('.tabs__content.active').fadeIn();
$('select').select2({
    minimumResultsForSearch: Infinity
});
$(window).scroll(function() {
    var blockheight = $('header').height();
    if ($(this).scrollTop() > blockheight) {
        $('header nav').fadeIn();
    } else if ($(this).scrollTop() < blockheight) {
        $('header nav').fadeOut();
    }
});
$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 1100) {
        $('header nav > div').addClass('container');
    } else {
        $('header nav > div').removeClass('container');
    }
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 1100) {
        $('header nav > div').addClass('container');
    }
    else {
        $('header nav > div').removeClass('container');
    }
  });
});
$('.select2-container').mouseover(function() {
   $('b[role="presentation"]', this).html('');
});
$('.select2-container').mouseout(function() {
   $('b[role="presentation"]', this).html('');
});
$('.close-modal').click(function() {
    $(this).parent().parent().fadeOut();
});
$('.get-want-this').click(function() {
    $('.want-this').fadeIn();
});
$('.get-thank').click(function() {
    if($(this).siblings('input').val() != 0) {
       $('.thank').fadeIn(); 
    } else {
        return;
    }
});
$('.get-send-request').click(function() {
    $('.send-request').fadeIn();
});
$('.get-privacy').click(function() {
    $('.want-privacy').fadeIn();
});
$('.slider').bxSlider({
    slideSelector: 'div.slide',
    speed: 600,
    pagerType: 'short',
    pagerShortSeparator: ' из ',
    nextText: '',
    prevText: '',
    slideWidth: 777
});
$('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
        $(this).click(function() {
            $('.slider').bxSlider({
                slideSelector: 'div.slide',
                speed: 600,
                pagerType: 'short',
                pagerShortSeparator: ' из ',
                nextText: '',
                prevText: '',
                slideWidth: 777
            });
            $(this).addClass('active').fadeIn().siblings().removeClass('active') .closest('div.tabs').find('.tabs__content').removeClass('active').hide().eq(i).addClass('active').fadeIn(600);
        });
    });
});
$("input[type='file']").change(function(){
var name_file = [];
for (var i = 0; i < $(this).get(0).files.length; ++i) {
name_file.push($(this).get(0).files[i].name);
}
$(".file-upload span").text(name_file.join(', '));
});
$('.kind-k').click(function() {
   $(this).addClass('active').siblings().removeClass('active'); 
});