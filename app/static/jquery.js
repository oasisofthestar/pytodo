var ctr = 0;
$(document).ready(function(m, n){
    $('#add').click(function(){
    	$('#tbl1').after('<tr><td><h3>' + $('#tdltext').val() + '</h3><input type="hidden" value="' + $('#tdltext').val() + '" id="tdlvar' + ctr + '"></td><td><input type="button" class="btnedt" id="' + ctr + '" value="Edit"><input type="button" class="btndel" id="' + ctr + '" value="Delete"></td></tr>');
    	ctr++;
    });

    $(document).on( 'click', '.btnedt', function() {
    	var a = $(this).attr('id');
    	alert($('#tdlvar' + a).val());
	});

	$(document).on( 'click', '.btndel', function() {
      	var a = $(this).attr('id');
    	alert($('#tdlvar' + a).val());
	});
});