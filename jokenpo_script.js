	$(document).ready(function(){

	 	var choice = null;	
		var vitoriaPlayer = 0;
		var vitoriaComputer = 0;

		//Altera o nome do jogador no inicio do index_game
	    $("#nameUser").text(localStorage.jogador);

		//Gera a opção do computador
	    var computerChoice = Math.random();

	    if (computerChoice < 0.34) {
	        computerChoice = "Pedra";

	    }else if(computerChoice <= 0.67) {
	        computerChoice = "Papel";

	    }else {
	        computerChoice = "Tesoura";

	    } 

		//Evento e função responsáveis por comparar as jogadas e mostrar para o usuário
		$('#pedra, #papel, #tesoura').on('click', function(ev){

			//Atribui o valor clicado pelo usuário para variavel choice
			var choice = $(this).prop("id").toLowerCase(); 
	    	computerChoice = computerChoice.toLowerCase();
	    	    			
			if((computerChoice == choice) || (computerChoice == choice)||(computerChoice == choice)){
					$("#vencedor").text("Empate");
					$("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
	              	$("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);

		    }else if (choice === "pedra"){

			    	if (computerChoice === "tesoura"){
			        	$("#vencedor").text("Jogador "+localStorage.jogador+" venceu");

			        	vitoriaPlayer += 1;

			        	$("#scoreUser").text(vitoriaPlayer);

			        	$("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
			        	$("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);


	        }else{
			            $("#vencedor").text("Oponente venceu");
			       		
			            vitoriaComputer += 1;
			            
			            $("#scoreOponent").text(vitoriaComputer);

			       		$("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
		           	    $("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);
		        }
		    
		    }else if (choice === "papel"){
			    	if (computerChoice === "pedra"){
			            
			        	 $("#vencedor").text("Jogador "+localStorage.jogador+" venceu");

			        	 vitoriaPlayer += 1;
			        	 $("#scoreUser").text(vitoriaPlayer);

			        	 $("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
			        	 $("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);

		    }else{
			             $("#vencedor").text("Oponente venceu");
			        	
			             vitoriaComputer += 1;
			            
			             $("#scoreOponent").text(vitoriaComputer);

			        	 $("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
			        	 $("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);

		        }

		    }else if (choice === "tesoura") {
		        
			        if (computerChoice === "pedra"){
			             $("#vencedor").text("Oponente venceu");
			            
			             vitoriaComputer += 1;
			            
			             $("#scoreOponent").text(vitoriaComputer);

			             $("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
			        	 $("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);

		    }else{

			             $("#vencedor").text("Jogador "+localStorage.jogador+" venceu");
			            
			             vitoriaPlayer += 1;
			            
			             $("#scoreUser").text(vitoriaPlayer);

			             $("#jogada-jogador").text("Jogada do jogador(a) "+localStorage.jogador+" foi "+choice);
			        	 $("#jogada-oponente").text("Jogada do oponente foi "+computerChoice);
		        }
		    }

		    //Janela modal
	        ev.preventDefault();
	 
	        var id = $("a[rel=modal]").attr("href");
	 
	        var alturaTela = $(document).height();
	        var larguraTela = $(window).width();
	     
	        //Colocando o fundo preto
	        $('#mascara').css({'width':larguraTela,'height':alturaTela});
	        $('#mascara').fadeIn(1000); 
	        $('#mascara').fadeTo("slow",0.8);
	 
	        var left = ($(window).width() /2) - ( $(id).width() / 2 );
	        var top = $(window).scrollTop()+10
	     
	        $(id).css({'top':top,'left':left});
	        $(id).show();   
		    
		    });
		 
		    $("#mascara").click( function(){
		        $(this).hide();
		        $(".window").hide();
		    });
		 
		    $('.fechar').click(function(ev){
		        ev.preventDefault();
		        $("#mascara").hide();
		        $(".window").hide();
			    });
			});
			 

