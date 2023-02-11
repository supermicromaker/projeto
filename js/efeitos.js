		$(document).ready(function(){

				$("#logotipo").on("mouseover", function(){
					console.log("Passou o mouse sobre o logotipo!");
				});

				$("#input-search").on("focus", function(){

					$("li.search").addClass("ativo");

				}).on("blur", function(){

					$("li.search").removeClass("ativo");

				})

				$(".thumbnails").owlCarousel({
					loop:true,
					margin:10,
					nav: true,
					navtext: ["Anterior", "Próximo"],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:3
						},
						1200:{
							items:4
						}

					}
				});

		});
		