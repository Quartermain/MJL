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
	_setSameHeight('.block-same-height');
    

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


