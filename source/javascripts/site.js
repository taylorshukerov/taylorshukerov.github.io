//= require jquery

$(document).ready(function(){
	$('.menu_item').hover(function(e) {
      $(this).children('.sub_menu').toggle()
		}
	);
});
