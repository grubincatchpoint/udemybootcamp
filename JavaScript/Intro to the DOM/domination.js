//Select and Manipulate
var h1 = document.querySelector("h1");
h1.style.color = "purple";
var highlight = document.getElementById("highlight");
//Can put #some-class in CSS with properties to change
highlight.classList.add("some-class");
//Remove class
highlight.classList.remove("some-class");
//toggle
highlight.classList.toggle("some-class");
var bolded = document.getElementsByClassName("bolded");
var tags = document.getElementsByTagName("li");
var highlightSelector = document.querySelector("#highlight");
var allLi = document.querySelectorAll("li");
