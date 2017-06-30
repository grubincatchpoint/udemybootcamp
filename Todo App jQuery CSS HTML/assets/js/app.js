//Check off specific todos by clicking
$('li').click(function() {
  $(this).toggleClass("completed");
});

//Delete when clicking the span
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});
