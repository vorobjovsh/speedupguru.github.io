$(document).ready(function(){

   $(".center").slick({
     dots: true,
     infinite: true,
     speed: 300,
	 lazyLoad: 'anticipated',
     slidesToShow: 1,
     adaptiveHeight: true
    });


});