 /*
  $("div").css("background", "purple");
  $(".highlight").css("width", "200px");
  $("#third").css("border", "1px solid orange");
  $("div:first-of-type").css("color", "pink");
  .text jQ = textContent js
  .html jQ = innerHtml js
  .attr lets you change attributes in jq
  .val extracts val from input or change the value.
  .addClass
  .removeClass
  .toggleClass
  .click adds a click event listener
  .keypress adds a keypress listener
  if keypressVal.which === 13
  on jQ gives you an event listener with a function
*/

$("button").on("click", function() {
  $('div').fadeToggle(1000);
});
