$(function(){
	if( $(window).width() > 1023 ){
		// Анимация
		$('.first_section .item .info').on('inview', function(event, isInView) {
			if (isInView) {
				setTimeout(function(){
					$('.first_section .item .info').addClass('animated fadeInUp');
				}, 300);
			}
		});


		$('.steps').on('inview', function(event, isInView) {
			if (isInView) {
				setTimeout(function(){
					$('.steps .item:eq(0)').addClass('animated fadeIn');
				}, 200);

				setTimeout(function(){
					$('.steps .item:eq(1)').addClass('animated fadeIn');
				}, 400);

				setTimeout(function(){
					$('.steps .item:eq(2)').addClass('animated fadeIn');
				}, 600);

				setTimeout(function(){
					$('.steps .item:eq(3)').addClass('animated fadeIn');
				}, 800);

				setTimeout(function(){
					$('.steps .item:eq(4)').addClass('animated fadeIn');
				}, 1000);

				setTimeout(function(){
					$('.steps .link').addClass('animated fadeIn');
				}, 1200);
			}
		});


		$('.products .block').on('inview', function(event, isInView) {
			if (isInView) {
				var _self = $(this)
				setTimeout(function(){
					_self.addClass('animated fadeIn');
				}, 300);
			}
		});


		$('.videos .block1').on('inview', function(event, isInView) {
			if (isInView) {
				var _self = $(this)
				setTimeout(function(){
					_self.find('.video').addClass('animated fadeInLeft');
					_self.find('.info').addClass('animated fadeInRight');
				}, 300);
			}
		});

		$('.videos .block2').on('inview', function(event, isInView) {
			if (isInView) {
				var _self = $(this)
				setTimeout(function(){
					_self.find('.video').addClass('animated fadeInRight');
					_self.find('.info').addClass('animated fadeInLeft');
				}, 300);
			}
		});


		$('.schema .line').on('inview', function(event, isInView) {
			if (isInView) {
				var _self = $(this)
				setTimeout(function(){
					_self.addClass('animated fadeIn');
				}, 300);
			}
		});


		$('.reviews').on('inview', function(event, isInView) {
			if (isInView) {
				setTimeout(function(){
					$('.reviews .col:eq(0)').addClass('animated fadeIn');
				}, 300);

				setTimeout(function(){
					$('.reviews .col:eq(1)').addClass('animated fadeIn');
				}, 600);

				setTimeout(function(){
					$('.reviews .col:eq(2)').addClass('animated fadeIn');
				}, 900);
			}
		});
	}
});