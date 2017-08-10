$(document).ready(function() {


	
});


function openContainer(div){
	div = '#' + div
	$('#details > div').each(function(i,item){
		$(item).hide();
	});
	$(div).show();
	
	
}

function enviar(){
	name = $("input[name=name]").val();
	email = $("input[name=email]").val();
	title = $("input[name=title]").val();
	comment = $("#comment").val();
	
	alert(name + " "+ email + " "+ title + " " + comment);
}