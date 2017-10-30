
// Animação do botão restart
$(document).ready(function(){
	$('input.btn-restart').on('mouseover', function(){
		$(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function(){
				$(this).removeClass('animated rubberBand')
			});
	});

    //Gera a opção do computador
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "Pedra";

    } else if(computerChoice <= 0.67) {
        computerChoice = "Papel";
    } else {
        computerChoice = "Tesoura";
    } 


    //Recebe o valor de txtFieldUser
    var textoUser = $("#txtFieldUser").val();



     //Evento responsável por fazer verificação e mostra o resultado do computerChoice para o usuário
    $("#txtFieldUser").focusout(function(){
        
        //Compara se o valor de txtFieldUser e o valor de computerChoice para ver quem é o ganhador ou se houve empate
        if (($('#txtFieldUser').val() == $('#txtFieldComputer').val()))
            $('#txtFieldGanhador').val("Empate");
        else if (($('#txtFieldUser').val() == $('#txtFieldComputer').val())) {
            if ($('#txtFieldComputer').val() === "Tesoura")
                $('#txtFieldGanhador').val("Pedra vence");
            else {
                $('#txtFieldGanhador').val("Papel vence");
               }
            }
        else if (($('#txtFieldUser').val() === "Papel")){
            if ($('#txtFieldComputer').val() === "Pedra"){
                $('#txtFieldGanhador').val("Papel vence");
            }else {
                $('#txtFieldGanhador').val("Tesoura vence");
                }
            }
        else if (($('#txtFieldUser').val() === "Tesoura")) {
            if ($('#txtFieldComputer').val() === "Pedra")
                $('#txtFieldGanhador').val("Pedra vence");
            else {
                $('#txtFieldGanhador').val("Tesoura vence");
                }
            }
        //Mostra o valor gerado por computerChoice depois que txtFieldUser é preenchido
        $('#txtFieldComputer').val(computerChoice);
 });


    $(".btn-restart").on('click',function(){
        alert("cat cat");
    });
 
});
