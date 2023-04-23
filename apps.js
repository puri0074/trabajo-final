//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//el menu direcciona a cada lugar
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales par aluego manipularlas
let Manejodearmasdeguerra = document.getElementById(
  "manejo de armas de guerra"
);
crearBarra(Manejodearmasdeguerra);
let Manejodemotos = document.getElementById("Manejo de motos");
crearBarra(Manejodemotos);
let Redactardocumentos = document.getElementById("Redactar documentos");
crearBarra(Redactardocumentos);
