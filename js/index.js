function showSublevel(element) {
    const selectedElement = document.getElementById(element);
    if(selectedElement.style.display == "inline") {
        selectedElement.style.display = "none"
    } else {
        selectedElement.style.display = "inline";
    }

}

function passarParametro(numeroDoGrafico){
	localStorage.setItem("numero_Do_Grafico",numeroDoGrafico);
}