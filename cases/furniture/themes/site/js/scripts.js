$(function() {
    $('.first_section .slider').bxSlider({
        speed: 1200,
        auto: true,
        loop: true,
        pause: 7000
    });
    $(".tabs_container").each(function() {
        $(this).find(".tab_content:first").show();
    });
    $(".tabs li").click(function() {
        var parentBox = $(this).parents('.tabs_container');
        $(parentBox).find(".tabs li").removeClass("active");
        $(this).addClass("active");
        $(parentBox).find(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });
    $('.text_block .toggle').click(function(e) {
        e.preventDefault();
        $('.text_block .hide').slideDown();
        $(this).remove();
    });
    $('.fancy_img').fancybox({
        padding: 24,
        margin: [20, 10, 20, 10]
    });
    $('a.scroll').click(function() {
        var selected = $(this).attr('href');
        $.scrollTo(selected, 1000, {
            offset: -40
        });
        return false;
    });
    if ($(window).width() > 767) {
        $('.menu').sticky({
            topSpacing: 0
        });
    }
    if (location.pathname == '/') {
        VisSense(document.getElementById('menu1')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(0) a').addClass('active');
                } else {
                    $('.menu li:eq(0) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu2')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(1) a').addClass('active');
                } else {
                    $('.menu li:eq(1) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu3')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.12) {
                    $('.menu li:eq(2) a').addClass('active');
                } else {
                    $('.menu li:eq(2) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu4')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(3) a').addClass('active');
                } else {
                    $('.menu li:eq(3) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu5')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(4) a').addClass('active');
                } else {
                    $('.menu li:eq(4) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu6')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(5) a').addClass('active');
                } else {
                    $('.menu li:eq(5) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu7')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(6) a').addClass('active');
                } else {
                    $('.menu li:eq(6) a').removeClass('active');
                }
            }
        }).start();
        VisSense(document.getElementById('menu8')).monitor({
            percentagechange: function(monitor, newValue, oldValue) {
                if (newValue > 0.4) {
                    $('.menu li:eq(7) a').addClass('active');
                } else {
                    $('.menu li:eq(7) a').removeClass('active');
                }
            }
        }).start();
    }
    $('.buttonUp a').click(function(e) {
        e.preventDefault();
        $('body,html').stop(false, false).animate({
            scrollTop: 0
        }, 800);
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).innerHeight()) {
        $('.buttonUp').fadeIn(300);
    } else {
        $('.buttonUp').fadeOut(200);
    }
});

function open_popup(url, data) {
    $('.popup_wrap, #fade').remove();
    $.ajax({
        url: url,
        cache: false,
        dataType: 'html',
        type: "post",
        data: data,
        isLocal: true,
        success: function(html) {
            $('body').append('<div class="popup_wrap">' + html + '</div>');
            $('body').addClass('popup_open');
            $('#popup').fadeIn();
            $('#popup').append('<span class="close_popup bt_close"></span>');
            $('body').append('<div id="fade"></div>');
            $('#fade').fadeIn();
        }
    });
}
$(function() {
    $('body').on('click', '#popup .close_popup', function() {
        $('#fade , #popup').fadeOut(function() {
            $('.popup_wrap').remove();
            $('#fade').remove();
            $('body').removeClass('popup_open');
        });
        return false;
    });
});
$(function() {
    $('body').on('click', '#popup .submit_form', function() {
        var form = $(this).closest('form');
        if (formsValide(form)) {
            var data = form.serialize();
            $('#popup .submit_form').remove();
            send_form(data, '#popup');
        }
        return false;
    });
    $('body').on('click', 'form.inline_form .submit_form', function() {
        var form = $(this).closest('form');
        if (formsValide(form)) {
            data = form.serialize();
            send_form(data, form);
            $(this).remove();
        }
        return false;
    });
});
$(function() {
    $('.order_block #file').live('change', function() {
        var data = new FormData();
        var error = '';
        file = $('.order_block #file')[0].files[0];
        data.append('file', file);
        $('.order_block label[for="file"]').hide().after('<label id="loading_label">Загрузка...</label>');
        $.ajax({
            url: '/forms/upload',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(data) {
                data = data.split('||');
                if (data[0] == 'success') {
                    $('.order_block #loading_label').html('Файл загружен');
                    $('.order_block #file').remove();
                    $('.order_block .input_file').val(data[1]);
                } else {
                    $('.order_block #loading_label').hide();
                    $('.order_block label[for="file"]').show();
                    alert(data);
                }
            }
        });
    });
});

function open_popup(url, data) {
    $('.popup_wrap, #fade').remove();
    $.ajax({
        url: url,
        cache: false,
        dataType: 'html',
        type: "post",
        data: data,
        isLocal: true,
        success: function(html) {
            $('body').append('<div class="popup_wrap">' + html + '</div>');
            $('body').addClass('popup_open');
            $('#popup').fadeIn();
            $('#popup').append('<span class="close_popup bt_close"></span>');
            $('body').append('<div id="fade"></div>');
            $('#fade').fadeIn();
        }
    });
}
$(function() {
    $('body').on('click', '.open_popup_text', function() {
        var elem = $(this).data('popup');
        var html = $('#' + elem).html();
        $('.popup_wrap, #fade').remove();
        $('body').append('<div class="popup_wrap"><div id="popup" class="text">' + html + '</div></div>');
        $('body').addClass('popup_open');
        $('#popup').fadeIn();
        $('#popup').append('<span class="close_popup bt_close"></span>');
        $('body').append('<div id="fade"></div>');
        $('#fade').fadeIn();
        return false;
    });
});

$(document).ready(function(){

    $('body').on('click', '.spoiler>.h', function() {
        $(this).parent().find('.text').slideToggle();
        return false;
    });

});