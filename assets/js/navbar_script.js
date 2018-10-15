var currentId = 0;

$(document).ready( function() {

	let navbar_dir = "templates/navbar_template.html";

	$.get(navbar_dir, function(data){
		$(".nav").replaceWith(data);
	});

    function checkScroll(){
        var opacity = 150; //start point navbar fixed to top changes in px

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
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(3000);
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

})

function changeContent(id){
	let templates = [
		"templates/empty.html",
		"templates/empty.html",
		"templates/menu_template.html",
		"templates/empty.html",
		"templates/empty.html"
	]
	$("#"+currentId).removeClass("active");
	currentId = id;
	$("#"+id).addClass("active");
	$.get(templates[id], function(data){
		$(".placeholder").replaceWith(data);
	});

}
