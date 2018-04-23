$('.popup-window').hide().prependTo('body');
$('.notifications').click(function() {
    if( $('.notifications-window').hasClass('opened-window') ) {
        $('.notifications-window').removeClass('opened-window');
    } else {
        $('.notifications-window').addClass('opened-window');
    }
});
$('.write-message .button').click(function() {
    $(this).parent().html('<textarea placeholder="Напишите здесь свое сообщение..." spellcheck="false"></textarea>').hide().fadeIn();
    $(this).detach();
});
$('#upload-file').change(function() {
    var filename = $(this).val().replace(/.*\\/, "");
    if(filename == 0) {
        $('.file-name').html('Файл не загружен...');
    } else {
        $('.file-name').html(filename);
    }
});
$('.open-popup').click(function() {
    var popup_id = $('#' + $(this).attr('data-popup'));
    $(popup_id).fadeIn();
});
$('.close-popup').click(function() {
   $(this).parent().parent().fadeOut(); 
});
$('.button-copy').click(function() {
    var button = $(this);
    if( button.hasClass('copied') || $('.icon-copy').hasClass('copied') ) {
        return;
    } else {
        button.before('<span class="success-alert">Реф. ссылка скопирована в буфер обмена</span>');
        $('.success-alert').hide().css("color", "green").fadeIn();   
        button.addClass('copied');
    }
});
$('.icon-copy').click(function() {
    var icon = $(this);
    if( icon.hasClass('copied') || $('.button-copy').hasClass('copied') ) {
        return;
    } else {
        icon.parent().next().before('<span class="success-alert" style="display: block;">Реф. ссылка скопирована в буфер обмена</span>');
        $('.success-alert').hide().css("color", "green").fadeIn();   
        icon.addClass('copied');
    }
});
$('.more-info-block .inner').hide();
$('.more-info-block .more-info').click(function() {
    $(this).hide();
    $('.more-info-block').css('top', '0');
    $('.more-info-block .inner').slideDown();
});
$('.more-info-block .inner > p').click(function() {
    $('.more-info-block .inner').slideUp();
    $('.more-info-block').css('top', 'auto');
    $('.more-info-block').css('bottom', '0');
    $('.more-info-block .more-info').show();
});
$('.articles-block').hide();
$('.articles-block').eq(0).show();
$('.categories-list li').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var index = $(this).index();
    $('.articles-block').fadeOut();
    $('.articles-block').eq(index).fadeIn();
});
$('.button-copy-ref').click(function() {
    $this = $(this);
    if( $this.hasClass('copied') ) {
        return;
    } else {
        $this.addClass('copied');
        $this.before('<span style="font-size: 0.85em; color: green; margin-top: 20px; display: block;">Реферальная ссылка успешно скопирована!</span>');
        $('.button-copy-ref.copied').siblings('span[style]').hide().fadeIn();
    }
});





// Toggle button
var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 700,
    'tolerance': 500
});
$('.mobile-menu').on('click', function() {
    slideout.toggle();
});