$(document).ready(function(){

    $(".filter-button").click(function(){
        let value = $(this).attr('data-filter');

        if(value == "alles")
        {
            $('.filter').show('3000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
