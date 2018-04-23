$('.next-colors').hide();
$(document).ready(function() {
    $('.mobile-menu-full').hide();
    $('.mob-menu').click(function() {
        $('.mobile-menu-full').slideToggle(1000);
    });
    $('.close-mob-menu').click(function() {
        $('.mobile-menu-full').slideUp(1000);
    });
    $('.spoiler-block').hide();
    $('.inserted').click(function() {
        var inserted = $('.inserted')
        $(this).children().next().slideToggle();
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.spoiler-link').click(function() {
       $(this).next().slideToggle();
    });
    $('.call-item-mob').click(function() {
       $('.login-block-mob, .search-block-mob').slideUp(); 
    });
    $('.login-item-mob').click(function() {
       $('.call-block-mob, .search-block-mob').slideUp(); 
    });
    $('.search-item-mob').click(function() {
       $('.login-block-mob, .call-block-mob').slideUp(); 
    });
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
    $('.man-item, .cart-item').mouseenter(function() {
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
    $(window).resize(function() {
        if($(window).width() < 500) {
            $('.catalog1 .col-md-6').removeClass('col-xs-6');
            $('.catalog2 .col-md-3').removeClass('col-xs-3').addClass('col-xs-6');
        } else {
            $('.catalog1 .col-md-6').addClass('col-xs-6');
            $('.catalog2 .col-md-3').addClass('col-xs-3').removeClass('col-xs-6');
        }
    });
    $('.colors > div, .next-colors > div').click(function() {
        var classthis = $(this).attr('class');
        $(this).addClass('active-color');
        $(this).nextAll().removeClass('active-color');
        $(this).prevAll().removeClass('active-color');
        $(this).parent().prevAll('.active-color').removeClass().addClass('active-color').addClass(classthis)
    });
    $('.yellow').click(function() {
        if($('.yellow').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item2.png');
        } 
    });
    $('.red').click(function() {
        if($('.red').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item3.png');
        } 
    });
    $('.brown').click(function() {
        if($('.brown').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item4.png');
        } 
    });
    $('.pink').click(function() {
        if($('.pink').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item1.png');
        } 
    });
    $('.white').click(function() {
        if($('.white').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item5.png');
        } 
    });
    $('.blue').click(function() {
        if($('.blue').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item6.png');
        } 
    });
    $('.gray').click(function() {
        if($('.gray').hasClass('active-color')) {
            $(this).parent().prevAll('.item-preview').find('.owl-item.active img').attr('src', 'app/images/item4.png');
        } 
    });
    
    
    
    
    
    
    $('.select-color .yellow').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item2.png');
        } 
    });
    $('.select-color .red').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item3.png');
        } 
    });
    $('.select-color .brown').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item4.png');
        } 
    });
    $('.select-color .pink').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item1.png');
        } 
    });
    $('.select-color .white').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item5.png');
        } 
    });
    $('.select-color .blue').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item6.png');
        } 
    });
    $('.select-color .gray').click(function() {
        if($(this).hasClass('active-color')) {
            $(this).parent().parent().parent().prev().find('img').attr('src', 'app/images/item4.png');
        } 
    });
    $('.item-preview').addClass('owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ''
    });
    $('.slider-items .bxslider').bxSlider({
        mode: 'vertical',
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 30,
        controls: true,
        nextText: '',
        prevText: '',
        speed: 1500
    });
    $('.slider-items li img').click(function() {
        var sourceimage = $(this).attr('src');
        $('.display-image-product img').attr('src', sourceimage);
    });
    $('.slider-items-mob li img').click(function() {
        var sourceimage = $(this).attr('src');
        $('.display-image-product img').attr('src', sourceimage);
    });
    $('.product-desc .btn-light').click(function() {
        $(this).addClass('favorite-active');
        $(this).html('В желаемом');
    });
    $('.slider-items-mob').owlCarousel({
        dots: false,
        nav: true,
        navText: '',
        responsive : {
            0: {
                items: 0
            },
            300: {
                items: 1
            },
            560: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });
    if($(window).width() > 900) {
        $('.slider-items + .col-sm-12').hide();
    } else {
        $('.slider-items + .col-sm-12').show();
    }
    var heightdel = $('.cart-main-content .product-desc').height();
    $('.delete-item').css('height', heightdel);
    $(window).resize(function() {
        var heightdel = $('.cart-main-content .product-desc').height();
        $('.delete-item').css('height', heightdel);
    });
    $('.item .select-color > span').click(function() {
        if($('.next-colors').hasClass('show')){
            $('.next-colors').fadeOut().removeClass('show').addClass('hide');
        } else {
            $('.next-colors').fadeIn().addClass('show').removeClass('hide');
        }
    });
    $('.next-colors > div').click(function() {
        $('.next-colors').addClass('hide').removeClass('show');
    });
    $('.item .size li').click(function() {
        $(this).addClass('active-size');
        $(this).nextAll().removeClass('active-size');
        $(this).prevAll().removeClass('active-size');
    });
});