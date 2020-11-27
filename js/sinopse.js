function mostrarListaDeGraficos(element) {

	if(element == "agricultura"){
		document.getElementById("dh").style.display = "none";
		const selectedElement = document.getElementById(element);
		if(selectedElement.style.display == "inline") {
			selectedElement.style.display = "none";
		} else {
			selectedElement.style.display = "inline";
		}
	}
	else{
		document.getElementById("agricultura").style.display = "none";
		const selectedElement = document.getElementById(element);
		if(selectedElement.style.display == "inline") {
			selectedElement.style.display = "none";
		} else {
			selectedElement.style.display = "inline";
		}
	}
}

function passarParametro(numeroDoGrafico){
	sessionStorage.setItem("numero_Do_Grafico",numeroDoGrafico);
}

$('.atv-econ-btn').click(function(){
	$('nav ul .atv-econ-show').toggleClass("show");
	$('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function(){
	$('nav ul .serv-show').toggleClass("show1");
	$('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});