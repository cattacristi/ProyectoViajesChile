// JAVASCRIPT//
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})


//jquery//

//smooth scroll//
$(document).ready(function(){
  $("a").on('click', function(event) {
  if (this.hash !== "") {
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
  scrollTop: $(hash).offset().top
  }, 800, function(){
  window.location.hash = hash;
  });
  }
  });
  });

  //cambio de color de los títulos de las seccion//
  $(".titulosecciones").click(function(){
    $(this).css({
    "color": "purple",
    });
    });


