$(document).ready(function(){

	// Resize window
	

	// Function slider homepage
	$(function() {
		$(".rslides").responsiveSlides({
			pager: true,
		});
	});

	$(function(){
		$(".right-header").hover(function(){
			
			$(this).toggleClass("active");
			$(".menu-drop").toggleClass("dis-none");
			$(".menu-drop").toggleClass("animated fadeIn");
			$(".humberger .fa").toggleClass("fa-chevron-down").toggleClass("fa-bars");
			
			var hHeader = $(".header").outerHeight();
			
			var wHumberger = $(".humberger").outerWidth();
			$(".menu-drop").css("top",hHeader);
			$(".menu-drop").css("width",wHumberger);

			// Show sub menu 2

			$(".menu-child2").css("right",wHumberger);

			$(".menu-child li").hover(function(){
				//$(".menu-child2").not($(this).find('a.show-child').siblings(".menu-child2")).addClass("dis-none ");
				$(this).find('a.show-child').siblings(".menu-child2").toggleClass("dis-none animated fadeIn");
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
	_setSameHeight('.same-height-header');

	// end
	// 
	
	// Height Summer header
	function heightHeaderMobile(){
		var heightHotLine = $(".header").outerHeight();
		var heightLogo = $(".container-logo").outerHeight();
		var sumHeight = heightHotLine + heightLogo;
		$(".sumHeightMobile").css("margin-top",sumHeight);
	}

	heightHeaderMobile();
	
	$(window).resize(function() {
	  if ($(window).width() < 768) {
	    	heightHeaderMobile();
		} else if ($(window).width() >= 768){
			$(".sumHeightMobile").removeAttr("style");
		};
	});

	if ($(window).width() >= 768){
		$(".sumHeightMobile").removeAttr("style");
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
    	var enquire_link = [];
    	$(".expander").each(function(evt){
    		//that = $(this);
    		//enquire_link[evt] = $(this).find('.enquire-link').clone();
			$(this).expander({
				slicePoint: 500,
				//afterExpand: function() {
					//$(this).find('.read-less .less-link').after(enquire_link[evt]);
				//},
				//afterCollapse: function() {
					//console.log(that.find('.read-more .more-link'));
					//that.find('.read-more .more-link').after(enquire_link[evt]);
				//},
				//userCollapsePrefix: '',
				//expandPrefix:'',
				expandEffect: 'slideDown',
				//expandSpeed: 800,
				collapseEffect: 'slideUp',
				//collapseSpeed: 800,
			});

			//$(this).find('.read-more .more-link').after(enquire_link[evt]);
			//$(this).find('.read-more').before($('<span class="three-dot">...</div>'));
    	});
    }

    readLess();
    // end

    function readLessServices(){
    	var enquire_link = [];
    	$(".expander-services").each(function(evt){
    		//that = $(this);
    		//enquire_link[evt] = $(this).find('.enquire-link').clone();
			$(this).expander({
				slicePoint: 500,
				//afterExpand: function() {
					//$(this).find('.read-less .less-link').after(enquire_link[evt]);
				//},
				//afterCollapse: function() {
					//console.log(that.find('.read-more .more-link'));
					//that.find('.read-more .more-link').after(enquire_link[evt]);
				//},
				//userCollapsePrefix: '',
				//expandPrefix:'',
				expandEffect: 'slideDown',
				//expandSpeed: 800,
				collapseEffect: 'slideUp',
				//collapseSpeed: 800,
			});

			//$(this).find('.read-more .more-link').after(enquire_link[evt]);
			//$(this).find('.read-more').before($('<span class="three-dot">...</div>'));
    	});
    }
    readLessServices();
    readLess();

    // Read more less function
    $('.c-read-more').click(function(event){
    	
    	if($(this).hasClass('more')){
    		$(this).parent('.button-read').siblings('.expander').find('.more-link').click();
    		$(this).text("Read less");

    		
			if ($(window).width() >= 1600){
				$(this).parents(".block-toggle").css("background-position-x","180%");
				$(this).parents(".block-service1").css("background-position-x","180%");
			}
			else
				$(this).parents(".block-toggle").css("background-position-x","130%");
				$(this).parents(".block-service1").css("background-position-x","130%");
    	}
    	else{
    		$(this).parent('.button-read').siblings('.expander').find('.less-link').click();
    		$(this).text("Read more");
    		$(this).parents(".block-toggle").css("background-position-x","100%");
    		$(this).parents(".block-service1").css("background-position-x","100%");
    	}
    	$(this).toggleClass('more');
	 	event.preventDefault();
    });

    // remove parallax on mobile
    // 
    
    if($(window).width() < 768) {
    	$(".parallax-content img").removeAttr("style");
    	$(".parallax-content img").removeAttr("data-parallax");
    	$(".parallax-content img").attr("src","images/parallax-none.jpg");
    } else {
    	
    };

    // height block elment faq
    // 
    // var heightSameBlock = $(".block-same-height").height();
    // var heightButtonFaq = $(".blog-element-faq .btn-blog").height();
    // var heightElementFaq = heightSameBlock - heightButtonFaq;

    // $(".article-blog .blog-element-faq").css("height",heightElementFaq);
    // $(".article-blog .blog-element-faq").css("overflow","hidden");
    
});


