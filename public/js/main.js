$(document).ready(function() {


	
});


function openContainer(div){
	div = '#' + div
	$('#details > div').each(function(i,item){
		$(item).hide();
	});
	$(div).show();
	
	
}