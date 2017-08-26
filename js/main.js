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
	$('.navbar-toggle').trigger('click');
	$('html,body').animate({scrollTop: $(div).offset().top},900);
}

function enviar(){
		
	name = $("input[name=name]").val();
	email = $("input[name=email]").val();
	if(!validateEmail(email)){
		$('.errorText').html('El mail es incorrecto');
		$("#modalError").modal('show');
		return false;
	}
	title = $("input[name=title]").val();
	comment = $("#comment").val();
	
	if (isNullOrWhitespace(name) || isNullOrWhitespace(title) || isNullOrWhitespace(comment)){
		$('.errorText').html('Debes completar todos los datos');
		$("#modalError").modal('show');
		return false;
	}
	
	var arr = { "name":name, "email":email, "title":title, "comment":comment };
	var data = JSON.stringify(arr);
	
	
	$.ajax({
		  type: "POST",
		  contentType: "application/json",
		  url: "/contact.php",
		  data: data,
		  beforeSend: function(){
			    $("#loading").modal('show');
			  },
		  success: function(){
			  $("#loading").modal('hide');
			  $('.modalTitle').html('Mensaje Enviado')
			  $('.errorText').html('');
			  $("#modalError").modal('show');
			  },
		  error: function (error) {
			  $("#loading").modal('hide');
			  $('.modalTitle').html('Error')
			  $('.errorText').html('Se ha producido un error interno, por favor intentalo mas tarde.');
			  $("#modalError").modal('show');
			  },
		  dataType: "text"
		});
	
}

function openModal(modal){
	modal = '#' + modal
	$(modal).modal({keyboard: true});
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isNullOrWhitespace(input) {
	  return !input || !input.trim();
	}

