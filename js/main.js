
$(document).ready(function(){
	$('.portofolio__inner').slick({
		dots: true,
		infinite: true,
	// fade: true,
	slidesToScroll: 1,
	// autoplay: true,
});
});

$(function(){
	$('.slick__items').slick({
		infinite: true,
		prevArrow: '<button class="slick-arrow arrow-left"></button>',
		nextArrow: '<button class="slick-arrow arrow-right"></button>',
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	$(document).ready(function(){
		$(".hamburger").click(function(){
			$(".header__menu-responsive").slideToggle("slow");
		});
	});

// $(document).ready(function(){
// 	$(".language-ru").click(function(){
// 	$(".content").slideToggle("slow");
// 	});
// });
// 	$(document).on("click", function(event){
// 	var $trigger = $("html div, body div");
// 	if($trigger !== event.target && !$trigger.has(event.target).length){
// 	$(".content").slideUp("slow");
// 	}            
// 	});

});

$(document).ready(function(){
	var mainactive=$('.host.active');
	$('.host').each(function(index){
		var element=$(this);
		$(".host, .host h3, .host p").on('mouseover', function(){
			if(!$(this).hasClass('active')){
				$(".host").not(element).removeClass('active')
				element.toggleClass('active')
			}

		});
		$(".host, .host h3, .host p").on('mouseleave', function(){
			$(".host").removeClass('active')
			mainactive.toggleClass('active')
		});
	});
});



// $(document).ready(function(){
// 	$(".host").click(function(){
// 	$(this).addClass('active').removeClass('active')
// 	});
// });


$(document).ready(function(){
	$('.hosting__responsive').slick({
		infinite: true,
		slidesToShow: 1,
		prevArrow: false,
		nextArrow: false,
		dots: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		},
		{
			breakpoint: 733,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		}
		]
	});
});

$(document).ready(function(){
	$(".menu-form").click(function(){
		$(".form__contact-menu").show("fast");
	});
	$(".close-btn").click(function(){
		$(".form__contact-menu").hide("fast");
	});
	$(".menu-form").click(function(){
		$(".header__menu-responsive").slideUp("fast");
	});
});
$(document).on("click", function(event){
	var $trigger = $("html div, body div");
	if($trigger !== event.target && !$trigger.has(event.target).length){
		$(".form__contact-menu").hide("fast");
	}            
});

$(document).ready(function(){
	$(".filter__inner").click(function(){
		$(".about__filter-adaptive").slideToggle("slow");
	});
	$(".filter-responsive").click(function(){
		$(".about__filter-adaptive").slideUp("slow");
	});
});
$(document).ready(function(){
	$('.filter').click(function(){
		$(this).addClass('active-filter');
		$(this).siblings('button').removeClass('active-filter');
	});
});

$(document).ready(function(){
	var mixer = mixitup('.about__page');
});

$(document).ready(function(){
	var mixer = mixitup('.about__page-responsive');
});

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 790) {
			$(".header").addClass("portofolio__header");
		}
		else{
			$(".header").removeClass("portofolio__header");
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$(".principal__arrow-inner").css("box-shadow" , " 0px 0px 5px 2px rgba(201,201,201,1)");
		}
		else{
			$(".principal__arrow-inner").css("box-shadow" , "none");  	
		}
		var scroll = $(window).scrollTop();
		if (scroll > 1750) {
			$(".principal__arrow-inner").css("box-shadow" , "none");
		}
		var scroll = $(window).scrollTop();
		if (scroll > 2700) {
			$(".principal__arrow-inner").css("box-shadow" , " 0px 0px 5px 2px rgba(201,201,201,1)");
		}
		var scroll = $(window).scrollTop();
		if (scroll > 3300) {
			// $(".principal__arrow-inner").css("position" , "absolute");
			$(".principal__arrow-inner").removeClass("fixed");
		}
	});
});
$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 3300) {
			// 
		}
		else{
			$(".principal__arrow-inner").css("position" , "fixed")  	
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 550) {
			$(".language-rom").addClass("language__about-ro");
			$(".language-eng").addClass("language__about-en");
			$(".language-rus").addClass("language-ru--first");
		}
		else{
			$(".language-rom").removeClass("language__about-ro");
			$(".language-eng").removeClass("language__about-en");
			$(".language-rus").removeClass("language-ru--first");	
		}
		var scroll = $(window).scrollTop();
		if (scroll > 2250) {
			$(".language-rom").removeClass("language__about-ro");
			$(".language-eng").removeClass("language__about-en");
			$(".language-rus").removeClass("language-ru--first");	
		}
	});
});
$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 3200) {
			$(".language-rom").addClass("language__about-ro");
			$(".language-eng").addClass("language__about-en");
			$(".language-rus").addClass("language-ru--first ");
		}
	});
});

document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});

