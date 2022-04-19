// JAVASCRIPT//
//TOOLTIP//
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})


//jquery//
//Se agrandan los títulos de la sección destacados//
$(".card-title").dblclick(function(){
  $(this).css({
  "font-size": "2em"
  });
  });

  //cambio de color de los títulos de las seccion//
  $(".titulosecciones").click(function(){
    $(this).css({
    "color": "purple",
    });
    });


