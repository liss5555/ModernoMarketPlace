$(function(){

	var mixer = mixitup('.products__inner-box');

	$(".rate-star").rateYo({    
    rating: 5,
		starWidth: "12px",
		readOnly: true,
	});
	
	$(".slider-products__inner").slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4

	});

});
