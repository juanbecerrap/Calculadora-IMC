function IMC(){
    var peso= document.getElementById("peso").value;
    var altura= document.getElementById("altura").value;
    var pro=  parseFloat (peso)/parseFloat (altura*altura); 
    
    if (pro < 18.5) {
		grado = ", se encuentra bajo peso.";
	} else if (pro >= 18.5 && pro <= 24.9) {
		grado = ", se encuentra en un peso normal.";
	} else if (pro >= 25 && pro <= 29.99) {
		grado = ", se encuentra en sobre peso.";
	} else if (pro >= 30 && pro <= 34.99) {
		grado = ", se encuentra en obesidad tipo I.";
	} else if (pro >= 35 && pro <= 39.99) {
		grado = ", se encuentra en obesidad tipo II.";
	} else if (pro > 40 ) {
		grado = ", se encuentra en obesidad tipo III.";
	} 
    document.getElementById("res").innerHTML = "Su IMC es de "+ pro + grado;
    }

