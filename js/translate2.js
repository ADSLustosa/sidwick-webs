$function() {

	// Español //
	$(".es").click(function() {

		// Header
		$(".navbar-list li.active a").text("Inicio");
		$(".navbar-list li a").text("Sobre nosotros");
		$(".navbar-list li a").text("Soluciones");
		$(".navbar-list li a").text("Certificados");
		$(".navbar-list li a").text("Contáctenos");
		

		// Home

		$
	});


	// English //
	$(".en").click(function() {
		$(".en").addClass("selected");
		$(".es").removeClass("selected");
		$(".fr").removeClass("selected");
		$(".de").removeClass("selected");
		$(".it").removeClass("selected");
		$(".pt").removeClass("selected");
		$(".ru").removeClass("selected");
		$(".zh").removeClass("selected");
		
		if (typeof resetToEnglish === "function") {
			resetToEnglish();
		}
		
		return false;
	});
}