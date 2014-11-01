// Hay que recordar la importancia de comenzar
// a ejecutar javascript cuando termine de cargar
// la página para evitar inconscistencias.
$(document).ready(function() {
  var contenedor = $('#menu-contenedor');
  var image_contenedor = $('#image-contenedor');
  var menu = $('#menu');
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 140) {
      contenedor.addClass('MenuPrincipalScroll');
      image_contenedor.addClass('MenuPrincipal-imageContainerScroll');
      menu.addClass('MenuPrincipal-listaScroll');
    } else {
      contenedor.removeClass('MenuPrincipalScroll');
      image_contenedor.removeClass('MenuPrincipal-imageContainerScroll');
      menu.removeClass('MenuPrincipal-listaScroll');
    }
  });
});