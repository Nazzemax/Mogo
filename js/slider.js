$(function(){
	$('.header-slider').slick({
		arrows:false,
		dots:true,
		dotsClass:'header-dots',
		autoplay:false,
		infinity:true,
	});

	$('.we-do__slider').slick({
		autoplay:true,
		infinity:true,
	});

	$('.reviews').slick({
		autoplay:true,
		infinity:true,
	});
});