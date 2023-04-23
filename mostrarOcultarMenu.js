function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //oculto esta
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
