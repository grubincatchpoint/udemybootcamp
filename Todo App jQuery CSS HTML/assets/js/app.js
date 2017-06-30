//Check off specific todos by clicking
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Delete when clicking the span
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //extract value
    var item = $(this).val();
    //create new li and add to ul
    $('ul').append("<li><span>X</span> " + item + "</li>");
    //Clear text
    $(this).val("");
  }
});
