$('.search-block, .call-block, .login-block, .women-block, .lookbook-block').hide();
$('.search-item, .search-block').mouseenter(function() {
    $('.search-block').fadeIn();
    $('.call-block, .login-block, .women-block, .lookbook-block').hide();
});
$('.call-item, .call-block').mouseenter(function() {
    $('.call-block').fadeIn();
    $('.search-block, .login-block, .women-block, .lookbook-block').hide();
});
$('.login-item, .login-block').mouseenter(function() {
    $('.login-block').fadeIn();
    $('.search-block, .call-block, .women-block, .lookbook-block').hide();
});
$('.women-item, .women-block').mouseenter(function() {
    $('.women-block').fadeIn();
    $('.search-block, .call-block, .login-block, .lookbook-block').hide();
});
$('.lookbook-item, .lookbook-block').mouseenter(function() {
    $('.lookbook-block').fadeIn();
    $('.search-block, .call-block, .login-block, .women-block').hide();
});
$('.search-block, .call-block, .login-block, .women-block, .lookbook-block').mouseleave(function() {
    $(this).fadeOut();
});
$('.man-item').mouseenter(function() {
    $('.search-block, .call-block, .login-block, .women-block, .lookbook-block').hide();
});
$('.catalog2').hide();
$('.catalog-type1').click(function() {
    $(this).addClass('active-type');
    $('.catalog-type2').removeClass('active-type');
    $('.catalog2').fadeOut();
    $('.catalog1').fadeIn();
});
$('.catalog-type2').click(function() {
    $(this).addClass('active-type')
    $('.catalog-type1').removeClass('active-type')
    $('.catalog1').fadeOut();
    $('.catalog2').fadeIn();
});