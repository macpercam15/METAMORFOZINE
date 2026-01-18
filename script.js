$(document).ready(function() {
  // Inicializar turn.js
  $("#flipbook").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    duration: 1000, // Velocidad de la animación
    gradients: true // Habilita sombras durante la animación
  });

  // Control de botones
  $("#prevBtn").click(function() {
    $("#flipbook").turn("previous");
  });

  $("#nextBtn").click(function() {
    $("#flipbook").turn("next");
  });

  // Permitir usar las flechas del teclado
  $(window).bind("keydown", function(e) {
    if (e.keyCode == 37) {
      $("#flipbook").turn("previous");
    } else if (e.keyCode == 39) {
      $("#flipbook").turn("next");
    }
  });
});