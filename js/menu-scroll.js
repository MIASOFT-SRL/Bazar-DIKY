// Hay que recordar la importancia de comenzar
// a ejecutar javascript cuando termine de cargar
// la página para evitar inconscistencias.
$(document).ready(function() {
  var contenedor = $('#menu-contenedor');
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 140) {
      contenedor.addClass('MenuPrincipalScroll');
    } else {
      contenedor.removeClass('MenuPrincipalScroll');
    }
  });
});