$(document).on('click', '#calculo', function() {
 var a = parseInt($('#idade').val()); 
 var b = parseInt($('#nome').val()); 

if (a >= 18) {
  $('#aviso').val(b "é +18 anos");
  $('#situação').html("<img src='lib/velho.png' heigth='300vh' width='300vh'>");
}else {
$('#aviso').val(b "tem -18 anos");
$('#situação').html("<img src='lib/crianca.png' heigth='300vh' width='300vh'>");
}
});

$(document).on('click', '#limpar', function() {
$('#nome').val('');
$('#idade').val('');
$('#aviso').val('');
});
