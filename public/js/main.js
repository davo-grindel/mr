$(document).ready(function() {


	
});

function openContainer(div){
	
	div = '#' + div
	if ($(div).hasClass('act')){
		$(div).slideToggle(900);
	}else{
		$('#details >div.act').slideUp(900).removeClass('act');
		$(div).slideDown(900);
		$(div).addClass('act');
		$(div).css('outline',0).attr('tabindex',-1).focus();
	}
}

function enviar(){
	name = $("input[name=name]").val();
	email = $("input[name=email]").val();
	title = $("input[name=title]").val();
	comment = $("#comment").val();
	
	alert(name + " "+ email + " "+ title + " " + comment);
}