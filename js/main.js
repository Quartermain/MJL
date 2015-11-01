$(window).ready(function(){

	// Resize window
	$(window).resize(function(){
	    heightHeaderMobile();
	}); 

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

	});


	// function to set same height
	
    var _setSameHeight = function (target) {

        var heights = $(target).map(function () {
                $(this).height('100%');
                return $(this).height();
            }).get(),

            maxHeight = Math.max.apply(null, heights);

        $(target).height(maxHeight);
    };

	if ($(window).width() < 768) {
		$(".article-blog .grid-multi").find("div").removeClass("block-same-height");
	};

	_setSameHeight('.block-same-height');

	// end
	// 
	
	// Height Summer header
	function heightHeaderMobile(){
		var heightHotLine = $(".header").outerHeight();
		var heightLogo = $(".container-logo").outerHeight();
		var sumHeight = heightHotLine + heightLogo;
		$(".sumHeightMobile").css("margin-top",sumHeight);
	}
	if ($(window).width() < 768) {
    	heightHeaderMobile();
	};

	// Colspan mobile
	// 
	$(".header-toggle").click(function(){
		$(this).parent().find($(".conten-toggle")).toggleClass("dis-block");
		$(this).find($(".arrown-mobile .fa")).toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
	});


    // Js read more, read less
    // 
    // 
    function readLess(){
    	$(".expander").each(function(){

			$(this).expander({
				slicePoint: 500,
				afterExpand: function() {
					$(this).find('.read-less .less-link').after($(this).find('.enquire-link'));
				},
				afterCollapse: function() {
					console.log($(this).find('.read-more .more-link'));
					$(this).find('.read-more .more-link').after($(this).find('.enquire-link'));
				},
				userCollapsePrefix: '',
				expandPrefix:'',
				expandEffect: 'slideDown',
				//expandSpeed: 800,
				collapseEffect: 'slideUp',
				//collapseSpeed: 800,
			});

			$(this).find('.read-more .more-link').after($(this).find('.enquire-link'));
			$(this).find('.read-more').before($('<span class="three-dot">...</div>'));
    	});
    }
    readLess();

    // end

});


