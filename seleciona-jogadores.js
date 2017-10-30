$(document).ready(function(){

	$("#nameJogador").focusout(function(){
		var nomeJogador = $(this).val();

		//Usa o local storage para armazenar o valor pego pelo textbox para ser usado na página index_game
		localStorage.setItem('jogador', nomeJogador)
		
		 //Abre a janela principal do jogo
		 window.location.href = 'index_game.html'; 
	});
	

});