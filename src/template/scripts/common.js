$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.slider__list').slick({
		arrows: false,
		dots: true,
		appendDots: $('.slider__dots'),
		fade: true,
		autoplay: 5000
	})


	$('select').styler();

	$('.text ol').each(function(index, el) {
		var li = $(this).find('li');

		li.each(function(index, el) {
			$(this).prepend('<span class="count">'+ (index + 1) +'.</span>')
		});
	});

	var galleryList = $('.gallery__list'),
			galleryNav = $('.gallery__nav');


	galleryList.slick({
		slidesToShow: 1,
		infinite: false,
		asNavFor: galleryNav,

	})

	galleryNav.slick({
		slidesToShow: 5,
		infinite: false,
		vertical: true,
		arrows: false,
		focusOnSelect: true,
		asNavFor: galleryList
	})

	var starsText = $('.stars__text');

	$('.star').click(function(event) {
		var starsPrev = $(this).prevAll('.star'),
				starsNext = $(this).nextAll('.star'),
				starText = $(this).find('input').attr('data-text');

		starsPrev.addClass('star_o');
		$(this).addClass('star_o')
		starsNext.removeClass('star_o');

		starsText.html(starText);
	});


	var nav = $('.nav__drop-list'),
			mainWrap = $('.main-wrap'),
			control = $('.nav__drop-control'),
			returnBtn = $('.nav__drop-return'),
			dropName = $('.nav__drop-name'),
			closeBtn = $('.nav__drop-close');

	var advantages = $('.advantages__list');

	advantages.slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 2560,
				settings: 'unslick'
			},
			{
				breakpoint: 767,
				settings: 'slick'
			}
		]
	})


	var certificates = $('.certificates__list');

	certificates.slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 2560,
				settings: 'unslick'
			},
			{
				breakpoint: 767,
				slidesToShow: 2,
				settings: 'slick'
			}
		]
	})

	var production = $('.production__list');

	production.slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 2560,
				settings: 'unslick'
			},
			{
				breakpoint: 767,
				slidesToShow: 1,
				settings: 'slick'
			}
		]
	})



	var other = $('.other__list');

	other.slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 2560,
				settings: 'unslick'
			},
			{
				breakpoint: 767,
				slidesToShow: 1,
				settings: 'slick'
			}
		]
	})


	$(window).on('load resize', function(event) {
		var windowWidth = $(window).width();
		if (windowWidth < 751) {
			// advantages.slick('reinit');
			// certificates.slick('reinit');
			// production.slick('reinit');
			// other.slick('reinit');
			nav.height(mainWrap.height() - 200);
			$('.nav__drop-list li ul').height(mainWrap.height() - 200);
		} else {
			// advantages.slick('reinit');
			// certificates.slick('reinit');
			// production.slick('reinit');
			// other.slick('reinit');
			// nav.removeAttr('style');
			$('.nav__drop-list li ul').removeAttr('style');
		}
	});


	$('.nav__drop-list > ul.show-xs > li > a').click(function(event) {
		var windowWidth = $(window).width();

		if (windowWidth < 768) {
			event.preventDefault();
			var href = $(this).attr('href'),
					text = $(this).html(),
					ul = $(this).parents('li').find('ul');

			control.addClass('nav__drop-control_toggle');
			ul.addClass('toggle');
			dropName.html(text);
		}
	});

	returnBtn.click(function(event) {
		control.removeClass('nav__drop-control_toggle');
		$('.nav__drop-list li ul').removeClass('toggle');
	});

	$('.nav__drop-btn, .nav__drop-close').click(function(event) {
		nav.toggleClass('nav__drop-list_toggle');
		closeBtn.toggleClass('nav__drop-close_toggle');
		control.removeClass('nav__drop-control_toggle');
		$('.nav__drop-list li ul').removeClass('toggle');
	});


	$('.has-subnav > a').click(function(event) {
		event.preventDefault();
		var li = $(this).parents('li');
		li.toggleClass('has-subnav_toggle')
	});
});
