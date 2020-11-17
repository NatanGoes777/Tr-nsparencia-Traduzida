
var aux = localStorage.getItem("numero_Do_Grafico"); 

console.log(aux);

mostrarGrafico(aux);

function mostrarGrafico(numeroDoGrafico){
	const selectedElement = document.getElementById(numeroDoGrafico);
	if(selectedElement.style.display == "none")
        selectedElement.style.display = "inline"
}

function trocarParaTabela(){
	var numeroDoGrafico = localStorage.getItem("numero_Do_Grafico"); 
	var string1 = "div_" + numeroDoGrafico;
	var string2 = "tabela_" + numeroDoGrafico;
	const selectedElement = document.getElementById(string1);
	const selectedElement2 = document.getElementById(string2);

	if(selectedElement.style.display == "none"){
		selectedElement.style.display = "inline";
		selectedElement2.style.display = "none";
	} else{
		selectedElement.style.display = "none";
		selectedElement2.style.display = "inline";
	}
}