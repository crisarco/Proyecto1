var lanzador = "#enlace-menu";
var desplegable = "#nav-bar-list";
var despliegaClase = "menu-desplegado"

function nav(){
	var lanz = document.querySelector(lanzador);	
	lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}

document.querySelector("html").classList.add("js");

nav();