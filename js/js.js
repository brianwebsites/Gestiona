$(document).ready (function() {
	var menu = document.getElementById('menu');
	var logo = document.getElementById('menu-logo');
	var altura = 200;
	window.addEventListener('scroll', function(){
		if (window.pageYOffset > altura) {
			menu.classList.add('menu-js');
			logo.classList.add('menu-logo-v');
		} else {
			menu.classList.remove('menu-js');
			logo.classList.remove('menu-logo-v');
		}
	})
});
$(document).ready (function() {
	var slider = $('#slider');
	var next = $('#btn-next');
	var prev = $('#btn-prev');

	$('#slider section:last').insertBefore('#slider section:first');
	slider.css('margin-left', '-'+100+'%');

	function moverD() {
		slider.animate({marginLeft:'-'+200+'%'},700, function(){
			$('#slider section:first').insertAfter('#slider section:last');
			slider.css('margin-left', '-'+100+'%');
		});
	}

	function moverI() {
		slider.animate({marginLeft:0},700, function(){
			$('#slider section:last').insertAfter('#slider section:first');
			slider.css('margin-left', '-'+100+'%');
		});
	}

	prev.on('click', function() {
		moverI();
	});

	next.on('click', function() {
		moverD();
	});

	function autoplay() {
		interval = setInterval(function() {
			moverD ();
		}, 6000);
	}

	autoplay();

});
