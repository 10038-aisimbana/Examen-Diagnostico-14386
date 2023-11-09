class Titulo extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		this.style.fontSize = "1em";
        this.style.fontFamily= "sans-serif";
		this.innerHTML ='<b><h2>PRESENTACIÓN</h2></b> <h3>Adrian Isaee Simbaña Moreira</h3> <img src="img/1693186478037.jpg" height="150">';
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/32/b8/77/32b877ed4aa7778cc7d43ebb7d95a6f1.png')";
        this.style.textAling= "center";
	}
} 
customElements.define("titulo-biografia", Titulo);

class nacimiento extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		this.innerHTML ='<table id="tabla" border="0"> <tr><h4>Nacimiento</h4><td>Fecha: 01 de Septiembre del 2000</td></tr> <tr><td>Ciudad: Sangolqui, Rumiñahui, Pichincha</td></tr></table>';
        this.style.fontSize = "1em";
        this.style.fontFamily= "sans-serif";
        this.style.color = "MediumVioletRed";
        this.style.textAling= "center";
        document.getElementById("tabla").style.backgroundColor="transparent";
	}
} 
customElements.define("nacimiento-biografia", nacimiento);


class mascotas extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		this.innerHTML ='<tabl2e id="tabla2" border="0"><tr><h4>Mascotas</h4><b><td>Moly </td></b> y <b><td> Balu</td></b></tr><br><tr><td><img src="img/Mascota1.jpeg" height="200"></td><td><img src="img/Mascota2.jpeg" height="200"></td></tr></table>';
		this.style.fontSize = "1em";
        this.style.fontFamily= "sans-serif";
        this.style.color = "Black";
        this.style.textAling= "center";
         document.getElementById("tabla2").style.backgroundColor="transparent";
	}
} 
customElements.define("mascotas-biografia", mascotas);

class estudios extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		this.innerHTML ='<table id="tabla3" border="0"><tr><h4>Estudios</h4><td>Escuela: Escuela Particular La Armenia</td></tr><tr><td>Colegio: Adventista Gedeón</td></tr><tr><td>Bachiller Unificado</td></tr><tr><td>Universidad: ESPE - Ingenieria en TICs</td></tr></table>';  
		this.style.fontSize = "1em";
        this.style.fontFamily= "sans-serif";
        this.style.color = "White";
        this.style.textAling= "center";
         document.getElementById("tabla3").style.backgroundColor="transparent";
	}
} 
customElements.define("estudios-biografia", estudios);


