$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	/*Scroll to top when arrow up clicked BEGIN*/
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if (height > 180) {
	        $('#back2Top').fadeIn();
	    } else {
	        $('#back2Top').fadeOut();
	    }
	});

    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


})