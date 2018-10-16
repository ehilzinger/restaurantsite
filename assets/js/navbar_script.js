$(document).ready( function() {

	let navbar_dir = "templates/navbar_template.html";

	$.get(navbar_dir, function(data){
		$(".nav").replaceWith(data);
	});

    function checkScroll(){
        var opacity = 150;

        if($(window).scrollTop() > opacity){
            $('.navbar.navbar-fixed-top').addClass("navchange");
        }else{
            $('.navbar.navbar-fixed-top').removeClass("navchange");
        }
    }

    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

})
