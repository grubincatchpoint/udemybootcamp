//Select and Manipulate
// var h1 = document.querySelector("h1");
// h1.style.color = "purple";
// var highlight = document.getElementById("highlight");
//Can put #some-class in CSS with properties to change
// highlight.classList.add("some-class");
//Remove class
// highlight.classList.remove("some-class");
//toggle
// highlight.classList.toggle("some-class");
// var bolded = document.getElementsByClassName("bolded");
// var tags = document.getElementsByTagName("li");
// var highlightSelector = document.querySelector("#highlight");
// var allLi = document.querySelectorAll("li");

//.textContent to change text
//.innerHTML to change HTML
//.getAttribute to get attributes
//.setAttribute to modify attributes of an element

// Add an event listener
//el.addEventListener("event", function() {});
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  h1.style.background = "orange";
});

document.querySelector("ul").addEventListener("click", function() {
  console.log("YOU CLICKED UL!");
})

var li = document.querySelectorAll("li");

for (var i=0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    this.style.color = "pink";
  })
};

var button = document.querySelector("button");
var purple = false;
button.addEventListener("click", function() {
  if(!purple) {
    document.querySelector("body").style.background = "purple";
  } else {
    document.querySelector("body").style.background = "white";
  }
  purple = !purple;
});
