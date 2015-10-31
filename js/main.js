$(window).ready(function(){
	// Function slider homepage
	$(function() {
		$(".rslides").responsiveSlides({
			pager: true,
		});
	});

	$(function(){
		$(".humberger").click(function(){
			var hHeader = $(".header").outerHeight();
			var wHumberger = $(".humberger").outerWidth();
			$(".menu-drop").toggleClass("dis-none");
			$(".humberger .fa").toggleClass("fa-chevron-down").toggleClass("fa-bars");
			$(this).toggleClass("active");
			$(".menu-drop").css("top",hHeader);
			$(".menu-drop").css("width",wHumberger);

			// Show sub menu 2

			$(".menu-child2").css("right",wHumberger);

			$(".menu-child .show-child").click(function(){
				$(".menu-child2").not($(this).siblings(".menu-child2")).addClass("dis-none");
				$(this).siblings(".menu-child2").toggleClass("dis-none");
			});
		});

	})

	// Split text service

});


