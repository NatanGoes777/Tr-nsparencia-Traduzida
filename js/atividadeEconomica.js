var aux = sessionStorage.getItem("numero_Do_Grafico");

mostrarGrafico(aux);

function mostrarGrafico(numeroDoGrafico){
	const selectedElement = document.getElementById(numeroDoGrafico);
	if(selectedElement.style.display == "none")
        selectedElement.style.display = "inline"
}

function trocarParaTabela(){
	var numeroDoGrafico = sessionStorage.getItem("numero_Do_Grafico"); 
	var string1 = "div_" + numeroDoGrafico;
	var string2 = "tabela_" + numeroDoGrafico;
	const grafico = document.getElementById(string1);
	const tabela = document.getElementById(string2);
	var icon_tab = document.getElementById("icon-tabela");
	var icon_graf = document.getElementById("icon-grafico");

	icon_tab.style.display = "none";
	icon_graf.style.display = "inline";

	grafico.style.display = "none";
	tabela.style.display = "inline";
}

function trocarParaGrafico(){
	var numeroDoGrafico = sessionStorage.getItem("numero_Do_Grafico"); 
	var string1 = "div_" + numeroDoGrafico;
	var string2 = "tabela_" + numeroDoGrafico;
	const grafico = document.getElementById(string1);
	const tabela = document.getElementById(string2);
	var icon_tab = document.getElementById("icon-tabela");
	var icon_graf = document.getElementById("icon-grafico");

	icon_tab.style.display = "inline";
	icon_graf.style.display = "none";

	grafico.style.display = "inline";
	tabela.style.display = "none";
}

function downloadCsv(){
	var numeroDoGrafico = sessionStorage.getItem("numero_Do_Grafico");

	if(numeroDoGrafico == "grafico01"){
		var link = document.getElementById("btnDownload");
		link.setAttribute("href",'../downloads/Especificacao01.csv');
		link.click();
	}
	if(numeroDoGrafico == "grafico02"){
		var link = document.getElementById("btnDownload");
		link.setAttribute("href",'../downloads/Especificacao02.csv');
		link.click();
	}
	if(numeroDoGrafico == "grafico03"){
		var link = document.getElementById("btnDownload");
		link.setAttribute("href",'../downloads/Especificacao03.csv');
		link.click();
	}
}