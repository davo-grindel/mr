$(document).ready(function() {


	
});

function openContainer(div){
	
	div = '#' + div;
	if ($(div).hasClass('act')){
		$(div).slideToggle(900);
	}else{
		$('#details >div.act').slideUp(900).removeClass('act');
		$(div).slideDown(900);
		$(div).addClass('act');
		$('html,body').animate({scrollTop: $(div).offset().top},900);
	}
}

function navBar(element){
	div = '#' + element;
	$('html,body').animate({scrollTop: $(div).offset().top},900);
}

function enviar(){
	name = $("input[name=name]").val();
	email = $("input[name=email]").val();
	title = $("input[name=title]").val();
	comment = $("#comment").val();
	
	alert(name + " "+ email + " "+ title + " " + comment);
}

function openModal(modal){
	modal = '#' + modal
	$(modal).modal({keyboard: true});
}